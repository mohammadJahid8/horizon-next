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

const partners = Array.from({ length: 50 }, (_, i) => ({
  id: `${i + 1}`,
  avatar: '/placeholder.svg?height=40&width=40',
  firstName: `First Name ${i + 1}`,
  lastName: `Last Name ${i + 1}`,
  companyName: `Company Name ${i + 1}`,
  industry: `Industry ${i + 1}`,

  email: `example${i + 1}@email.com`,
  phone: '161616161',
  createdAt: new Date().toISOString() + i,
  // status: i < 3 ? 'pending' : 'verified',
}));

export default function PartnersPage() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');

  return (
    <div className='space-y-6'>
      <Title className='mb-4 sm:mb-6' text='Partners' />

      <div className='flex flex-col sm:flex-row gap-4'>
        <Input
          placeholder='Search username or company...'
          className='w-full sm:max-w-[300px] rounded-[12px] h-12 sm:h-14'
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <div className='flex gap-4'>
          <Select value={industryFilter} onValueChange={setIndustryFilter}>
            <SelectTrigger className='w-full sm:w-[180px] rounded-[12px] h-12 sm:h-14'>
              <SelectValue placeholder='Industry' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='Assisted Living'>Assisted Living</SelectItem>
              <SelectItem value='Home care'>Home care</SelectItem>
              <SelectItem value='Home Health'>Home Health</SelectItem>
              <SelectItem value='Hospitals'>Hospitals</SelectItem>
              <SelectItem value='Nursing Homes'>Nursing Homes</SelectItem>
            </SelectContent>
          </Select>
          <Select>
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

      <DataTable
        columns={partnerColumns}
        data={partners.filter(
          (partner) =>
            (industryFilter === '' || partner.industry === industryFilter) &&
            (globalFilter === '' ||
              partner.firstName
                .toLowerCase()

                .includes(globalFilter.toLowerCase()) ||
              partner.lastName
                .toLowerCase()
                .includes(globalFilter.toLowerCase()) ||
              partner.companyName
                .toLowerCase()
                .includes(globalFilter.toLowerCase()) ||
              partner.email.toLowerCase().includes(globalFilter.toLowerCase()))
        )}
      />
    </div>
  );
}
