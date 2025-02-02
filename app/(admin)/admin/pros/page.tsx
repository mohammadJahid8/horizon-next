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
import { columns } from '@/components/global/admin/columns';
import Title from '@/components/global/title';

const pros = Array.from({ length: 50 }, (_, i) => ({
  id: `${i + 1}`,
  avatar: '/placeholder.svg?height=40&width=40',
  name: `Pro Name ${i + 1}`,
  email: `example${i + 1}@email.com`,
  phone: '161616161',
  joiningDate: '4-12-2024',
  status: i < 3 ? 'pending' : 'verified',
}));

export default function ProsPage() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  return (
    <div className='space-y-6'>
      <Title className='mb-4 sm:mb-6' text="Pro's" />

      <div className='flex flex-col sm:flex-row gap-4'>
        <Input
          placeholder='Search username or company...'
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
              <SelectItem value='verified'>Verified</SelectItem>
              <SelectItem value='pending'>Pending</SelectItem>
              <SelectItem value='blocked'>Blocked</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-full sm:w-[180px] rounded-[12px] h-12 sm:h-14'>
              <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='newest'>Newest</SelectItem>
              <SelectItem value='oldest'>Oldest</SelectItem>
              <SelectItem value='name'>Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={pros.filter(
          (pro) =>
            (statusFilter === 'all' || pro.status === statusFilter) &&
            (globalFilter === '' ||
              pro.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
              pro.email.toLowerCase().includes(globalFilter.toLowerCase()))
        )}
      />
    </div>
  );
}
