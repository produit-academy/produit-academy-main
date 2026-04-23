import Head from 'next/head';
import { useState, useEffect } from 'react';
import { withAdminAuth } from '../../../lib/auth';
import { apiGet, apiFetch } from '../../../lib/api';
import AdminLayout from '../../../components/AdminLayout';

function AdminComplaints() {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => { load(); }, []);
    const load = async () => {
        try { setComplaints(await apiGet('/api/staff/module/support/complaints/')); }
        catch { }
        finally { setLoading(false); }
    };

    const resolve = async (id) => {
        const comment = prompt('Resolution comment (optional):');
        try {
            await apiFetch(`/api/staff/module/support/complaints/${id}/`, {
                method: 'PATCH', body: JSON.stringify({ status: 'Resolved', resolution_comment: comment || '' }),
            });
            load();
        } catch { }
    };

    const filtered = complaints.filter(c => filter === 'all' || c.status === filter);

    return (
        <AdminLayout title="Complaints">
            <Head><title>Complaints | Produit Admin</title></Head>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                {['all', 'Pending', 'Resolved'].map(f => (
                    <button key={f} className={`admin-btn ${filter === f ? 'primary' : ''}`} onClick={() => setFilter(f)} style={{ fontSize: '0.82rem', padding: '6px 14px' }}>
                        {f === 'all' ? `All (${complaints.length})` : `${f} (${complaints.filter(c => c.status === f).length})`}
                    </button>
                ))}
            </div>
            {loading ? <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}><div className="admin-spinner" /></div> : filtered.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {filtered.map(c => (
                        <div key={c.id} className="admin-card" style={{ borderLeft: `4px solid ${c.status === 'Pending' ? 'var(--admin-red)' : 'var(--admin-green)'}` }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ margin: '0 0 4px' }}>{c.subject}</h4>
                                    <p style={{ margin: '0 0 8px', fontSize: '0.88rem', color: 'var(--admin-text-secondary)' }}>{c.description}</p>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--admin-text-secondary)' }}>Student: {c.student_name} · {new Date(c.created_at).toLocaleDateString()}</div>
                                </div>
                                <span className="admin-badge" style={{ background: c.status === 'Pending' ? 'var(--admin-red-bg)' : 'var(--admin-green-bg)', color: c.status === 'Pending' ? 'var(--admin-red)' : 'var(--admin-green)' }}>{c.status}</span>
                            </div>
                            {c.resolution_comment && <div style={{ marginTop: '10px', padding: '10px', borderRadius: '8px', background: 'var(--admin-bg)', fontSize: '0.85rem' }}><strong>Resolution:</strong> {c.resolution_comment}</div>}
                            {c.status === 'Pending' && <button className="admin-btn primary" onClick={() => resolve(c.id)} style={{ marginTop: '12px', fontSize: '0.82rem', padding: '6px 14px' }}>Resolve</button>}
                        </div>
                    ))}
                </div>
            ) : <div className="admin-card admin-empty"><h3>No complaints</h3></div>}
        </AdminLayout>
    );
}

export default withAdminAuth(AdminComplaints);
