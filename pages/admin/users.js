import Head from 'next/head';
import { useState, useEffect } from 'react';
import { withAdminAuth } from '../../lib/auth';
import { apiGet, apiPost, apiFetch } from '../../lib/api';
import AdminLayout from '../../components/AdminLayout';

const ACCOUNT_TYPES = [
    { key: 'platform_admin', label: 'Platform Admin' },
    { key: 'support_staff', label: 'Support Staff' },
    { key: 'contact_staff', label: 'Contact Enquiry Staff' },
    { key: 'hr_staff', label: 'HR Staff' },
];

const PLATFORMS = [
    { key: 'gate', label: 'GATE' },
    { key: 'classes', label: 'Classes' },
];

function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [filterType, setFilterType] = useState('');
    const [accountType, setAccountType] = useState('platform_admin');
    const [form, setForm] = useState({
        first_name: '', last_name: '', email: '', password: '',
        phone_number: '', platform: 'gate', assigned_platforms: ['gate'],
    });

    useEffect(() => { loadUsers(); }, []);

    const loadUsers = async () => {
        setLoading(true);
        try {
            const data = await apiGet('/api/admin/users/');
            setUsers(data);
        } catch { setError('Failed to load users.'); }
        finally { setLoading(false); }
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const togglePlatform = (p) => {
        const current = form.assigned_platforms;
        if (current.includes(p)) {
            if (current.length > 1) setForm({ ...form, assigned_platforms: current.filter(x => x !== p) });
        } else {
            setForm({ ...form, assigned_platforms: [...current, p] });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true); setError(''); setSuccess('');

        const payload = {
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
            password: form.password,
            phone_number: form.phone_number,
            account_type: accountType,
        };

        if (accountType === 'platform_admin') {
            payload.platform = form.platform;
        } else if (accountType === 'support_staff' || accountType === 'contact_staff') {
            payload.assigned_platforms = form.assigned_platforms;
        }

        try {
            const res = await apiPost('/api/admin/users/create/', payload);
            const data = await res.json();
            if (res.ok) {
                setSuccess(data.message || 'Account created successfully.');
                setForm(prev => ({ ...prev, first_name: '', last_name: '', email: '', password: '', phone_number: '' }));
                loadUsers();
            } else { setError(data.error || JSON.stringify(data)); }
        } catch { setError('Network error.'); }
        finally { setSubmitting(false); }
    };

    const handleDelete = async (id, email) => {
        if (!confirm(`Delete user ${email}?`)) return;
        try {
            const res = await apiFetch(`/api/admin/users/${id}/`, { method: 'DELETE' });
            if (res.ok) { setSuccess('User deleted.'); loadUsers(); }
        } catch { setError('Network error.'); }
    };

    const getTypeBadge = (u) => {
        if (u.role === 'admin' || u.is_staff) return { label: 'Admin', color: 'var(--admin-blue)', bg: 'var(--admin-blue-bg)' };
        if (u.designation === 'Support Staff') return { label: 'Support', color: 'var(--admin-red)', bg: 'var(--admin-red-bg)' };
        if (u.designation === 'Contact Enquiry Staff') return { label: 'Contact Enquiry', color: 'var(--admin-yellow)', bg: 'var(--admin-yellow-bg)' };
        if (u.designation === 'HR Staff') return { label: 'HR', color: 'var(--admin-purple)', bg: 'var(--admin-purple-bg)' };
        return { label: u.role, color: 'var(--admin-green)', bg: 'var(--admin-green-bg)' };
    };

    const getPlatformLabel = (u) => {
        if (u.role === 'admin' || u.is_staff) return u.platform?.toUpperCase() || '--';
        if (u.department_name) return u.department_name.replace('Support - ', '').replace('Contact - ', '').replace('HR - ', '');
        return '--';
    };

    const filteredUsers = users.filter(u => {
        if (!filterType) return true;
        if (filterType === 'admin') return u.role === 'admin' || u.is_staff;
        if (filterType === 'support') return u.designation === 'Support Staff';
        if (filterType === 'contact') return u.designation === 'Contact Enquiry Staff';
        if (filterType === 'hr') return u.designation === 'HR Staff';
        return true;
    });

    const needsPlatformSelect = accountType === 'support_staff' || accountType === 'contact_staff';

    return (
        <AdminLayout title="User Management">
            <Head><title>Users | Produit Admin</title></Head>
            {success && <div className="admin-alert success">{success}</div>}
            {error && <div className="admin-alert error">{error}</div>}

            <div className="admin-card" style={{ marginBottom: '28px', maxWidth: '720px' }}>
                <h3 className="admin-section-title">Create Account</h3>

                {/* Account Type Selector */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginBottom: '24px' }}>
                    {ACCOUNT_TYPES.map(t => (
                        <button key={t.key} type="button" onClick={() => setAccountType(t.key)}
                            style={{
                                padding: '14px 12px', borderRadius: '12px', cursor: 'pointer',
                                border: accountType === t.key ? '2px solid var(--admin-accent)' : '1px solid var(--admin-border)',
                                background: accountType === t.key ? 'var(--admin-accent-light)' : 'transparent',
                                textAlign: 'left', transition: 'all 0.2s',
                            }}>
                            <div style={{ fontWeight: '600', fontSize: '0.88rem', color: accountType === t.key ? 'var(--admin-accent-dark)' : 'var(--admin-text)', marginBottom: '4px' }}>
                                {t.label}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-secondary)', lineHeight: '1.3' }}>{t.desc}</div>
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Platform Selection for Admin */}
                    {accountType === 'platform_admin' && (
                        <div className="admin-form-group">
                            <label className="admin-label">Platform</label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {PLATFORMS.map(p => (
                                    <button key={p.key} type="button" onClick={() => setForm({ ...form, platform: p.key })}
                                        className="admin-btn" style={{
                                            background: form.platform === p.key ? 'var(--admin-accent-light)' : 'transparent',
                                            color: form.platform === p.key ? 'var(--admin-accent-dark)' : 'var(--admin-text-secondary)',
                                            borderColor: form.platform === p.key ? 'var(--admin-accent)' : 'var(--admin-border)',
                                            padding: '8px 20px',
                                        }}>
                                        {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Platform Assignment for Support/Contact Staff */}
                    {needsPlatformSelect && (
                        <div className="admin-form-group">
                            <label className="admin-label">Assigned Platform(s)</label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {PLATFORMS.map(p => (
                                    <button key={p.key} type="button" onClick={() => togglePlatform(p.key)}
                                        className="admin-btn" style={{
                                            background: form.assigned_platforms.includes(p.key) ? 'var(--admin-accent-light)' : 'transparent',
                                            color: form.assigned_platforms.includes(p.key) ? 'var(--admin-accent-dark)' : 'var(--admin-text-secondary)',
                                            borderColor: form.assigned_platforms.includes(p.key) ? 'var(--admin-accent)' : 'var(--admin-border)',
                                            padding: '8px 20px',
                                        }}>
                                        {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* HR Staff — auto-assigned, show note */}
                    {accountType === 'hr_staff' && (
                        <div style={{ padding: '12px 16px', borderRadius: '10px', background: 'var(--admin-purple-bg)', color: 'var(--admin-purple)', fontSize: '0.85rem', marginBottom: '16px', fontWeight: '500' }}>
                            This user will be auto-assigned to the Careers portal for reviewing job applications.
                        </div>
                    )}

                    <div className="admin-grid-2">
                        <div className="admin-form-group">
                            <label className="admin-label">First Name</label>
                            <input className="admin-input" name="first_name" required value={form.first_name} onChange={handleChange} />
                        </div>
                        <div className="admin-form-group">
                            <label className="admin-label">Last Name</label>
                            <input className="admin-input" name="last_name" required value={form.last_name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="admin-grid-2">
                        <div className="admin-form-group">
                            <label className="admin-label">Email</label>
                            <input className="admin-input" type="email" name="email" required value={form.email} onChange={handleChange} />
                        </div>
                        <div className="admin-form-group">
                            <label className="admin-label">Password</label>
                            <input className="admin-input" type="text" name="password" required minLength="6" value={form.password} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="admin-form-group">
                        <label className="admin-label">Phone</label>
                        <input className="admin-input" name="phone_number" value={form.phone_number} onChange={handleChange} />
                    </div>

                    <button type="submit" className="admin-btn primary" disabled={submitting} style={{ marginTop: '8px' }}>
                        {submitting ? 'Creating...' : 'Create Account'}
                    </button>
                </form>
            </div>

            {/* Filter + Table */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <h3 className="admin-section-title" style={{ margin: 0, marginRight: '12px' }}>
                    Directory ({filteredUsers.length})
                </h3>
                {[
                    { key: '', label: 'All' },
                    { key: 'admin', label: 'Admins' },
                    { key: 'support', label: 'Support' },
                    { key: 'contact', label: 'Contact' },
                    { key: 'hr', label: 'HR' },
                ].map(f => (
                    <button key={f.key}
                        className={`admin-btn ${filterType === f.key ? 'primary' : ''}`}
                        onClick={() => setFilterType(f.key)}
                        style={{ fontSize: '0.82rem', padding: '6px 14px' }}>
                        {f.label}
                    </button>
                ))}
            </div>

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}><div className="admin-spinner" /></div>
            ) : filteredUsers.length > 0 ? (
                <div className="admin-table-wrapper">
                    <table className="admin-table">
                        <thead><tr><th>Name</th><th>Type</th><th>Platform</th><th>Email</th><th>Joined</th><th></th></tr></thead>
                        <tbody>
                            {filteredUsers.map((u) => {
                                const badge = getTypeBadge(u);
                                return (
                                    <tr key={u.id}>
                                        <td><strong>{u.first_name} {u.last_name}</strong></td>
                                        <td><span className="admin-badge" style={{ background: badge.bg, color: badge.color }}>{badge.label}</span></td>
                                        <td>{getPlatformLabel(u)}</td>
                                        <td style={{ color: 'var(--admin-text-secondary)' }}>{u.email}</td>
                                        <td style={{ color: 'var(--admin-text-secondary)', whiteSpace: 'nowrap' }}>{new Date(u.date_joined).toLocaleDateString()}</td>
                                        <td><button className="admin-btn danger" onClick={() => handleDelete(u.id, u.email)} style={{ padding: '4px 12px', fontSize: '0.78rem' }}>Delete</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="admin-card admin-empty"><h3>No users found</h3><p>Create an account above or adjust filters.</p></div>
            )}
        </AdminLayout>
    );
}

export default withAdminAuth(AdminUsers);
