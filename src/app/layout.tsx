import '@/shared/styles/globals.css';
import ReactQueryProviders from '@/app/provider/ReactQueryProvider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <main className="flex justify-center">
          <div className="mx-4 my-20 w-full max-w-[960px]">
            <ReactQueryProviders>{children}</ReactQueryProviders>
          </div>
        </main>
      </body>
    </html>
  );
}
