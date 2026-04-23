import Head from 'next/head';
import { useState, useEffect } from 'react';
import { withAdminAuth } from '../../lib/auth';
import { apiGet, apiFetch } from '../../lib/api';
import AdminLayout from '../../components/AdminLayout';

function AdminCareers() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { load(); }, []);
    const load = async () => {
        try { setApplications(await apiGet('/api/staff/module/careers/applications/')); }
        catch { }
        finally { setLoading(false); }
    };

    const handleToggleInterview = async (id, currentStatus) => {
        try {
            const res = await apiFetch(`/api/staff/module/careers/applications/${id}/`, {
                method: 'PATCH',
                body: JSON.stringify({ interviewed: !currentStatus }),
            });
            if (res.ok) {
                setApplications(applications.map(app =>
                    app.id === id ? { ...app, interviewed: !currentStatus } : app
                ));
            }
        } catch { }
    };

    const handleExportCSV = () => {
        const headers = ['Date', 'Name', 'Position', 'Email', 'Phone', 'Portfolio', 'Interviewed'];
        const rows = [headers.join(',')];
        applications.forEach(app => {
            rows.push([
                `"${new Date(app.created_at).toLocaleDateString()}"`,
                `"${(app.name || app.full_name || '').replace(/"/g, '""')}"`,
                `"${app.position || ''}"`,
                `"${app.email}"`,
                `"${app.phone || ''}"`,
                `"${app.portfolio || ''}"`,
                `"${app.interviewed ? 'Yes' : 'No'}"`,
            ].join(','));
        });
        const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'job_applications.csv';
        link.click();
    };

    return (
        <AdminLayout title="Job Applications">
            <Head><title>Careers | Produit Admin</title></Head>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <p style={{ fontSize: '0.88rem', color: 'var(--admin-text-secondary)', margin: 0 }}>
                    All applications from the Careers portal ({applications.length})
                </p>
                {applications.length > 0 && (
                    <button className="admin-btn" onClick={handleExportCSV} style={{ fontSize: '0.82rem' }}>
                        Export CSV
                    </button>
                )}
            </div>
            {loading ? <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}><div className="admin-spinner" /></div> : applications.length > 0 ? (
                <div className="admin-table-wrapper">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Date</th><th>Name</th><th>Position</th>
                                <th>Contact</th><th>Portfolio</th>
                                <th style={{ textAlign: 'center' }}>Interviewed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map(app => (
                                <tr key={app.id}>
                                    <td style={{ whiteSpace: 'nowrap' }}>{new Date(app.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                                    <td><strong>{app.name || app.full_name}</strong></td>
                                    <td><span className="admin-badge" style={{ background: 'var(--admin-purple-bg)', color: 'var(--admin-purple)' }}>{app.position || 'General'}</span></td>
                                    <td>
                                        <div><a href={`mailto:${app.email}`} style={{ color: 'var(--admin-accent)' }}>{app.email}</a></div>
                                        <div style={{ fontSize: '0.82rem', color: 'var(--admin-text-secondary)' }}>{app.phone || '--'}</div>
                                    </td>
                                    <td>{app.portfolio ? <a href={app.portfolio} target="_blank" rel="noreferrer" style={{ color: 'var(--admin-accent)', fontWeight: '600' }}>View Link</a> : <span style={{ color: 'var(--admin-text-secondary)', fontStyle: 'italic' }}>Not provided</span>}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                                            <input
                                                type="checkbox"
                                                checked={app.interviewed || false}
                                                onChange={() => handleToggleInterview(app.id, app.interviewed)}
                                                style={{ cursor: 'pointer', transform: 'scale(1.3)', accentColor: 'var(--admin-accent)' }}
                                            />
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : <div className="admin-card admin-empty"><h3>No applications</h3><p>No job applications submitted yet.</p></div>}
        </AdminLayout>
    );
}

export default withAdminAuth(AdminCareers);
