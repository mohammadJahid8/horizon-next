'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DataTable } from '@/components/global/admin/data-table';
import { partnerColumns } from '@/components/global/admin/columns';
import Title from '@/components/global/title';
import { useAppContext } from '@/lib/context';

export default function PartnersPage() {
  const { partners } = useAppContext();

  const [globalFilter, setGlobalFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortFilter, setSortFilter] = useState('newest');

  const filteredPartners = partners.filter(
    (partner: any) =>
      (statusFilter === 'all' || partner.status === statusFilter) &&
      (globalFilter === '' ||
        (partner?.personalInfo?.firstName
          ? partner?.personalInfo?.firstName
              .toLowerCase()
              .includes(globalFilter.toLowerCase())
          : false) ||
        (partner?.personalInfo?.lastName
          ? partner?.personalInfo?.lastName
              .toLowerCase()
              .includes(globalFilter.toLowerCase())
          : false) ||
        partner?.email?.toLowerCase().includes(globalFilter.toLowerCase()))
  );

  const sortedPartners =
    sortFilter === 'newest' ? filteredPartners.reverse() : filteredPartners;

  return (
    <div className='space-y-6'>
      <Title className='mb-4 sm:mb-6' text='Partners' />

      <div className='flex flex-col sm:flex-row gap-4'>
        <Input
          placeholder='Search username or email...'
          className='w-full sm:max-w-[300px] rounded-[12px] h-12 sm:h-14'
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <div className='flex gap-4'>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className='w-full sm:w-[180px] rounded-[12px] h-12 sm:h-14'>
              <SelectValue placeholder='Status' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='Assisted Living'>Assisted Living</SelectItem>
              <SelectItem value='Home care'>Home care</SelectItem>
              <SelectItem value='Home Health'>Home Health</SelectItem>
              <SelectItem value='Hospitals'>Hospitals</SelectItem>
              <SelectItem value='Nursing Homes'>Nursing Homes</SelectItem>
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

      <DataTable columns={partnerColumns} data={sortedPartners} />
    </div>
  );
}
