import UsersList from '@/app/components/list/list';
import Header from '@/app/components/common/header';
import Footer from '@/app/components/common/footer';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col'>
            <Header/>
            <div className='mt-4 flex grow rounded-lg bg-gray-50 px-6 py-10'>
                <UsersList />
            </div>
            <Footer/>
        </main>
    )
}
