import Head from 'next/head';
import { useState, useEffect } from 'react';
import { withAdminAuth } from '../../../lib/auth';
import { apiGet, apiFetch } from '../../../lib/api';
import AdminLayout from '../../../components/AdminLayout';

function AdminContacts() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterPlatform, setFilterPlatform] = useState('');

    useEffect(() => { load(); }, []);
    const load = async () => {
        try {
            const url = filterPlatform ? `/api/staff/module/support/contacts/?platform=${filterPlatform}` : '/api/staff/module/support/contacts/';
            setContacts(await apiGet(url));
        } catch { }
        finally { setLoading(false); }
    };
    useEffect(() => { if (!loading) load(); }, [filterPlatform]);

    const resolve = async (id) => {
        try { await apiFetch(`/api/staff/module/support/contacts/${id}/`, { method: 'PATCH', body: JSON.stringify({ status: 'Resolved' }) }); load(); } catch { }
    };

    return (
        <AdminLayout title="Contact Inquiries">
            <Head><title>Contacts | Produit Admin</title></Head>
            <div style={{ marginBottom: '20px' }}>
                <select className="admin-select" value={filterPlatform} onChange={(e) => setFilterPlatform(e.target.value)} style={{ width: 'auto', minWidth: '140px' }}>
                    <option value="">All Platforms</option>
                    <option value="gate">GATE</option>
                    <option value="classes">Classes</option>
                </select>
            </div>
            {loading ? <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}><div className="admin-spinner" /></div> : contacts.length > 0 ? (
                <div className="admin-table-wrapper">
                    <table className="admin-table">
                        <thead><tr><th>Date</th><th>Name</th><th>Contact</th><th>Platform</th><th>Message</th><th>Status</th><th></th></tr></thead>
                        <tbody>
                            {contacts.map(c => (
                                <tr key={c.id}>
                                    <td style={{ whiteSpace: 'nowrap' }}>{new Date(c.created_at).toLocaleDateString()}</td>
                                    <td><strong>{c.name}</strong></td>
                                    <td style={{ fontSize: '0.85rem' }}>{c.email}<br /><span style={{ color: 'var(--admin-text-secondary)' }}>{c.phone}</span></td>
                                    <td><span className="admin-badge" style={{ background: c.platform === 'gate' ? 'var(--admin-blue-bg)' : 'var(--admin-green-bg)', color: c.platform === 'gate' ? 'var(--admin-blue)' : 'var(--admin-green)' }}>{c.platform?.toUpperCase()}</span></td>
                                    <td style={{ maxWidth: '250px', fontSize: '0.85rem' }}>{c.message}</td>
                                    <td><span className="admin-badge" style={{ background: c.status === 'Pending' ? 'var(--admin-yellow-bg)' : 'var(--admin-green-bg)', color: c.status === 'Pending' ? 'var(--admin-yellow)' : 'var(--admin-green)' }}>{c.status}</span></td>
                                    <td>{c.status === 'Pending' && <button className="admin-btn primary" onClick={() => resolve(c.id)} style={{ fontSize: '0.78rem', padding: '4px 10px' }}>Resolve</button>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : <div className="admin-card admin-empty"><h3>No inquiries</h3></div>}
        </AdminLayout>
    );
}

export default withAdminAuth(AdminContacts);
