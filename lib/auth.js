import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext(null);

const decodeToken = (token) => {
    try { return JSON.parse(atob(token.split('.')[1])); } catch { return null; }
};

export function AdminAuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('admin_access_token');
        if (token) {
            const decoded = decodeToken(token);
            if (decoded && decoded.role === 'admin') {
                setUser(decoded);
            } else {
                localStorage.removeItem('admin_access_token');
                localStorage.removeItem('admin_refresh_token');
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (email, password) => {
        const API_BASE = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${API_BASE}/api/login/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();

        if (!res.ok) throw new Error(data.detail || 'Login failed');

        const decoded = decodeToken(data.access);
        if (decoded.role !== 'admin') throw new Error('Only super admins can access this panel.');

        localStorage.setItem('admin_access_token', data.access);
        localStorage.setItem('admin_refresh_token', data.refresh);
        setUser(decoded);
        return decoded;
    };

    const logout = () => {
        localStorage.removeItem('admin_access_token');
        localStorage.removeItem('admin_refresh_token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

export function withAdminAuth(Component) {
    return function ProtectedPage(props) {
        const { user, isLoading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!isLoading && !user) {
                router.replace('/admin/login');
            }
        }, [user, isLoading, router]);

        if (isLoading) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><div className="admin-spinner" /></div>;
        if (!user) return null;
        return <Component {...props} />;
    };
}
