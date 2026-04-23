import Head from 'next/head';
import { useState, useEffect } from 'react';
import { withAdminAuth } from '../../lib/auth';
import { apiGet } from '../../lib/api';
import AdminLayout from '../../components/AdminLayout';

function AdminDashboard() {
    const [stats, setStats] = useState({
        admins: 0, support: 0, contact: 0, hr: 0,
        complaints: 0, contacts: 0, applications: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const [users, complaints, contacts, applications] = await Promise.all([
                    apiGet('/api/admin/users/').catch(() => []),
                    apiGet('/api/staff/module/support/complaints/').catch(() => []),
                    apiGet('/api/staff/module/support/contacts/').catch(() => []),
                    apiGet('/api/staff/module/careers/applications/').catch(() => []),
                ]);
                setStats({
                    admins: users.filter(u => u.role === 'admin' || u.is_staff).length,
                    support: users.filter(u => u.designation === 'Support Staff').length,
                    contact: users.filter(u => u.designation === 'Contact Enquiry Staff').length,
                    hr: users.filter(u => u.designation === 'HR Staff').length,
                    complaints: Array.isArray(complaints) ? complaints.filter(c => c.status === 'Pending').length : 0,
                    contacts: Array.isArray(contacts) ? contacts.filter(c => c.status === 'Pending').length : 0,
                    applications: Array.isArray(applications) ? applications.length : 0,
                });
            } catch { }
            finally { setLoading(false); }
        };
        load();
    }, []);

    const cards = [
        { label: 'Platform Admins', value: stats.admins, color: 'var(--admin-blue)', bg: 'var(--admin-blue-bg)' },
        { label: 'Support Staff', value: stats.support, color: 'var(--admin-red)', bg: 'var(--admin-red-bg)' },
        { label: 'Contact Staff', value: stats.contact, color: 'var(--admin-yellow)', bg: 'var(--admin-yellow-bg)' },
        { label: 'HR Staff', value: stats.hr, color: 'var(--admin-purple)', bg: 'var(--admin-purple-bg)' },
        { label: 'Pending Complaints', value: stats.complaints, color: '#c0392b', bg: 'rgba(192,57,43,0.08)' },
        { label: 'Pending Contacts', value: stats.contacts, color: '#b7950b', bg: 'rgba(183,149,11,0.08)' },
        { label: 'Job Applications', value: stats.applications, color: 'var(--admin-green)', bg: 'var(--admin-green-bg)' },
    ];

    const platforms = [
        { name: 'GATE Portal', desc: 'Mock tests and question bank', color: 'var(--admin-blue)' },
        { name: 'Classes Portal', desc: 'Courses, attendance and mentoring', color: 'var(--admin-green)' },
        { name: 'Careers Portal', desc: 'Job applications and hiring', color: 'var(--admin-yellow)' },
        { name: 'Support System', desc: 'Complaints and contact inquiries', color: 'var(--admin-red)' },
    ];

    return (
        <AdminLayout title="Dashboard">
            <Head><title>Dashboard | Produit Admin</title></Head>

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '60px' }}><div className="admin-spinner" /></div>
            ) : (
                <>
                    <div className="admin-stats">
                        {cards.map((c) => (
                            <div key={c.label} className="admin-stat">
                                <div className="admin-stat-value" style={{ color: c.color }}>{c.value}</div>
                                <div className="admin-stat-label">{c.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="admin-card" style={{ marginTop: '12px' }}>
                        <h3 className="admin-section-title">Platform Overview</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            {platforms.map((p) => (
                                <div key={p.name} style={{
                                    padding: '16px', borderRadius: '10px',
                                    border: '1px solid var(--admin-border)',
                                    background: 'rgba(255,255,255,0.6)',
                                    borderLeft: `3px solid ${p.color}`,
                                }}>
                                    <div style={{ fontWeight: '600', fontSize: '0.92rem', marginBottom: '4px' }}>{p.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--admin-text-secondary)' }}>{p.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </AdminLayout>
    );
}

export default withAdminAuth(AdminDashboard);
