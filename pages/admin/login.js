import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useAuth } from '../../lib/auth';

export default function AdminLogin() {
    const { login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await login(email, password);
            router.push('/admin');
        } catch (err) {
            setError(err.message || 'Login failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head><title>Admin Login | Produit Academy</title></Head>
            <div className="admin-login-container">
                <div className="admin-login-card">
                    <div className="admin-login-title">
                        <div style={{ width: '56px', height: '56px', margin: '0 auto' }}>
                            <img src="/logo.png" alt="Produit Academy" width="56" height="56" style={{ borderRadius: '12px' }} />
                        </div>
                        <h1>Produit Academy</h1>
                        <p>Super Admin Panel</p>
                    </div>

                    {error && <div className="admin-alert error">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="admin-form-group">
                            <label className="admin-label">Email</label>
                            <input className="admin-input" type="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} required
                                placeholder="admin@produitacademy.com" />
                        </div>
                        <div className="admin-form-group">
                            <label className="admin-label">Password</label>
                            <input className="admin-input" type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} required
                                placeholder="Enter password" />
                        </div>
                        <button type="submit" className="admin-btn primary" disabled={loading}
                            style={{ width: '100%', padding: '12px', marginTop: '8px' }}>
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
