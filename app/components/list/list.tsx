'use client'

import Search from '@/app/components/search/search'
import { UserType } from '@/app/lib/definitions'
import { useMemo, useState } from 'react'
import { TableContentMobile } from '@/app/components/list-content-mobile/content-mobile'
import { TableContentDesktop } from '@/app/components/list-content-desktop/content-desktop'
import { DetailModal } from '@/app/components/detail-modal/detail-modal'
import { useDisclosure } from '@nextui-org/modal'
import { Pagination } from '@nextui-org/pagination'
import { useQuery } from '@tanstack/react-query'
import { getUsersEndpoint } from '@/app/lib/endpoints/get-users.endpoint'
import { Spinner } from '@nextui-org/spinner'

const pageSize = 5

export default function UsersList() {
    const { data: users, isLoading } = useQuery({
        queryKey: ['getUsersEndpoint'],
        queryFn: getUsersEndpoint,
    })

    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    const [activeUserId, setActiveUserId] = useState<number | null>(null)

    const [currentPage, setCurrentPage] = useState<number>(1)

    const [searchTerm, setSearchTerm] = useState<string>('')

    const filteredUsers = useMemo(() => {
        setCurrentPage(1)
        return (users || []).filter(
            (user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [users, searchTerm])

    const currentPageUsers: UserType[] = useMemo(
        () =>
            filteredUsers.slice(
                (currentPage - 1) * pageSize,
                currentPage * pageSize
            ),
        [filteredUsers, currentPage]
    )

    return (
        <div className='w-full'>
            {/* list header */}
            <div className='mb-4 flex flex-row justify-between'>
                <Search
                    placeholder='Search users...'
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            </div>

            {/* list content */}
            {isLoading ? (
                <Spinner classNames={{ base: 'w-full mx-auto mt-16' }} />
            ) : (
                <>
                    {/* mobile */}
                    <div className='md:hidden'>
                        <TableContentMobile
                            users={currentPageUsers}
                            setActiveUserId={setActiveUserId}
                            onOpen={onOpen}
                        />
                    </div>

                    {/* desktop */}
                    <div className='hidden min-h-[440px] md:flex'>
                        <TableContentDesktop
                            users={currentPageUsers}
                            setActiveUserId={setActiveUserId}
                            onOpen={onOpen}
                        />
                    </div>
                </>
            )}

            {/* cancel modal*/}
            <DetailModal
                activeUserId={activeUserId}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />

            {/* pagination */}
            {(users?.length || 0) > 0 && (
                <div className='mt-4 flex justify-center'>
                    <Pagination
                        initialPage={1}
                        onChange={setCurrentPage}
                        total={Math.ceil(
                            (filteredUsers?.length || 0) / pageSize
                        )}
                        showControls
                        loop
                    />
                </div>
            )}
        </div>
    )
}
