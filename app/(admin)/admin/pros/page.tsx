'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DataTable } from '@/components/global/admin/data-table';
import { proColumns } from '@/components/global/admin/columns';
import Title from '@/components/global/title';
import { useAppContext } from '@/lib/context';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProsPage() {
  const { pros } = useAppContext();

  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const router = useRouter();

  const [globalFilter, setGlobalFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState(status || 'all');
  const [sortFilter, setSortFilter] = useState('newest');

  const filteredPros = pros.filter(
    (pro: any) =>
      (statusFilter === 'all' || pro.status === statusFilter) &&
      (globalFilter === '' ||
        (pro?.personalInfo?.firstName
          ? pro?.personalInfo?.firstName
              .toLowerCase()
              .includes(globalFilter.toLowerCase())
          : false) ||
        (pro?.personalInfo?.lastName
          ? pro?.personalInfo?.lastName
              .toLowerCase()
              .includes(globalFilter.toLowerCase())
          : false) ||
        pro?.email?.toLowerCase().includes(globalFilter.toLowerCase()))
  );

  const sortedPros =
    sortFilter === 'newest' ? filteredPros.reverse() : filteredPros;

  const handleStatusFilter = (value: string) => {
    setStatusFilter(value);

    router.push(`/admin/pros?status=${value}`);
  };

  return (
    <div className='space-y-6'>
      <Title className='mb-4 sm:mb-6' text="Pro's" />

      <div className='flex flex-col sm:flex-row gap-4'>
        <Input
          placeholder='Search username...'
          className='w-full sm:max-w-[300px] rounded-[12px] h-12 sm:h-14'
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <div className='flex gap-4'>
          <Select value={statusFilter} onValueChange={handleStatusFilter}>
            <SelectTrigger className='w-full sm:w-[180px] rounded-[12px] h-12 sm:h-14'>
              <SelectValue placeholder='Status' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='approved'>Approved</SelectItem>
              <SelectItem value='pending'>Pending</SelectItem>
              <SelectItem value='blocked'>Blocked</SelectItem>
              <SelectItem value='rejected'>Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortFilter} onValueChange={setSortFilter}>
            <SelectTrigger className='w-full sm:w-[180px] rounded-[12px] h-12 sm:h-14'>
              <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='newest'>Newest</SelectItem>
              <SelectItem value='oldest'>Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <DataTable columns={proColumns} data={sortedPros} />
    </div>
  );
}
