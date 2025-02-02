'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { Check, X, Mail, Pencil, ArrowUpDown, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import TableDropdown from './table-dropdown';
import { ReviewApplicationModal } from './review-application-modal';
import AdminAlertModal from './admin-alert-modal';
import { MessageModal } from './message-modal';
import { AdminEditUserModal } from './admin-edit-user-modal';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='flex items-center gap-3'>
          <Image
            src={'/dummy-profile-pic.jpg'}
            alt={row.original.name}
            className='rounded-full'
            width={40}
            height={40}
          />
          <span className='font-medium'>{row.getValue('name')}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'phone',
    header: 'Phone Number',
  },
  {
    accessorKey: 'joiningDate',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Joining Date
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return (
        <span
          className={
            status === 'verified' ? 'text-green-500' : 'text-amber-500'
          }
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      );
    },
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;

      if (status === 'pending') {
        return (
          <div className='flex items-center gap-2'>
            <AdminAlertModal alertType='approve'>
              <Button
                variant='ghost'
                size='icon'
                className='text-green-500 hover:text-primary bg-green-50'
              >
                <Check className='size-5' />
              </Button>
            </AdminAlertModal>
            <AdminAlertModal alertType='reject'>
              <Button
                variant='ghost'
                size='icon'
                className='text-red-500 hover:text-red-600 bg-red-50'
              >
                <X className='size-5' />
              </Button>
            </AdminAlertModal>
            <ReviewApplicationModal status={status}>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-500 hover:text-gray-600 bg-gray-50'
              >
                <Eye className='size-5' />
              </Button>
            </ReviewApplicationModal>
          </div>
        );
      }

      return (
        <div className='flex items-center gap-2'>
          <AdminEditUserModal>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-500 hover:text-gray-600 bg-gray-50'
            >
              <Pencil className='size-5' />
            </Button>
          </AdminEditUserModal>
          <MessageModal>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-500 hover:text-gray-600 bg-gray-50'
            >
              <Mail className='size-5' />
            </Button>
          </MessageModal>
          <ReviewApplicationModal status={status}>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-500 hover:text-gray-600 bg-gray-50'
            >
              <Eye className='size-5' />
            </Button>
          </ReviewApplicationModal>
          <TableDropdown />
        </div>
      );
    },
  },
];
