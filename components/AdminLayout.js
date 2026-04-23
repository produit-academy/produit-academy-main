import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NAV_SECTIONS = [
    {
        title: 'Overview',
        items: [
            { label: 'Dashboard', href: '/admin', icon: 'dashboard' },
        ],
    },
    {
        title: 'Platform Management',
        items: [
            { label: 'Users', href: '/admin/users', icon: 'users' },
        ],
    },
    {
        title: 'Data',
        items: [
            { label: 'Complaints', href: '/admin/support/complaints', icon: 'flag' },
            { label: 'Contacts', href: '/admin/support/contacts', icon: 'mail' },
            { label: 'Applications', href: '/admin/careers', icon: 'briefcase' },
        ],
    },
];

const ICONS = {
    dashboard: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
        </svg>
    ),
    users: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    building: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
        </svg>
    ),
    flag: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
        </svg>
    ),
    mail: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
    ),
    briefcase: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    ),
};

export default function AdminLayout({ children, title }) {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        logout();
        router.push('/admin/login');
    };

    return (
        <div className="admin-layout">
            {/* Mobile Toggle */}
            <button className="admin-sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? '\u2715' : '\u2630'}
            </button>

            {/* Sidebar */}
            <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="admin-sidebar-header">
                    <div className="admin-logo">
                        <div className="admin-logo-icon">
                            <img src="/logo.png" alt="Produit Academy" width="28" height="28" style={{ borderRadius: '6px' }} />
                        </div>
                        <div>
                            <div className="admin-logo-text">Produit Academy</div>
                            <div className="admin-logo-sub">Super Admin</div>
                        </div>
                    </div>
                </div>

                <nav className="admin-nav">
                    {NAV_SECTIONS.map((section) => (
                        <div key={section.title} className="admin-nav-section">
                            <div className="admin-nav-title">{section.title}</div>
                            {section.items.map((item) => {
                                const isActive = router.pathname === item.href;
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={`admin-nav-item ${isActive ? 'active' : ''}`}
                                        onClick={(e) => { e.preventDefault(); setSidebarOpen(false); router.push(item.href); }}
                                    >
                                        <span className="admin-nav-icon">{ICONS[item.icon]}</span>
                                        {item.label}
                                    </a>
                                );
                            })}
                        </div>
                    ))}
                </nav>

                <div className="admin-sidebar-footer">
                    <div className="admin-user-info">
                        <div className="admin-user-avatar">
                            {(user?.username?.[0] || 'A').toUpperCase()}
                        </div>
                        <div>
                            <div className="admin-user-name">{user?.username || 'Admin'}</div>
                            <div className="admin-user-role">Super Admin</div>
                        </div>
                    </div>
                    <button className="admin-logout-btn" onClick={handleLogout}>Log Out</button>
                </div>
            </aside>

            {/* Overlay */}
            {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />}

            {/* Main Content */}
            <main className="admin-main">
                {title && <h1 className="admin-page-title">{title}</h1>}
                {children}
            </main>
        </div>
    );
}
