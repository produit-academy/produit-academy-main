import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f8fa', color: '#333', fontFamily: 'sans-serif' }}>

      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '20px' }}>
        <Image
          src="/work-in-progress.png"
          alt="Page Not Found"
          width={500}
          height={400}
          style={{ maxWidth: '100%', height: 'auto', marginBottom: '30px' }}
        />

        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 700 }}>Page Not Found</h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          The requested page could not be located. It may have been moved or is currently unavailable.
        </p>

        <button
          onClick={() => router.push('/')}
          className="btn btn--primary btn--lg"
          style={{
            cursor: 'pointer',
          }}
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
}
