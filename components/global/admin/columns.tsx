'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { Check, X, Mail, Pencil, ArrowUpDown, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import TableDropdown from './table-dropdown';
import { ReviewApplicationModal } from './review-application-modal';
import AdminAlertModal from './admin-alert-modal';
import { MessageModal } from './message-modal';

import moment from 'moment';
import { adminStatusColors, adminStatusTexts } from '@/utils/status';
import EditAction from './edit-action';

export const proColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'fullName',
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
      const firstName = row.original.personalInfo?.firstName || '';
      const lastName = row.original.personalInfo?.lastName || '';
      const image = row.original.personalInfo?.image || '';

      return (
        <div className='flex items-center gap-3'>
          <Image
            unoptimized
            src={image || '/dummy-profile-pic.jpg'}
            alt={`${firstName} ${lastName}`}
            className='rounded-full object-cover size-10'
            width={40}
            height={40}
          />

          <p className='font-medium'>
            {`${firstName} ${lastName}`.trim() || 'N/A'}
          </p>
        </div>
      );
    },
    sortingFn: (rowA, rowB) => {
      const nameA =
        `${rowA.original.firstName || ''} ${rowA.original.lastName || ''}`
          .trim()
          .toLowerCase();
      const nameB =
        `${rowB.original.firstName || ''} ${rowB.original.lastName || ''}`
          .trim()
          .toLowerCase();
      return nameA.localeCompare(nameB);
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
    accessorKey: 'personalInfo.phone',
    header: 'Phone Number',
    cell: ({ row }) => {
      const phone = row.original.personalInfo?.phone || '';
      return <span>{phone || 'N/A'}</span>;
    },
  },
  {
    accessorKey: 'createdAt',

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
    cell: ({ row }) => {
      const createdAt = row.original.createdAt || '';
      return <span>{moment(createdAt).format('DD-MM-YYYY')}</span>;
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
          style={{
            color: adminStatusColors[status as keyof typeof adminStatusColors],
          }}
        >
          {adminStatusTexts[status as keyof typeof adminStatusTexts]}
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
            <AdminAlertModal alertType='approve' data={row.original}>
              <Button
                variant='ghost'
                size='icon'
                className='text-green-500 hover:text-primary bg-green-50'
              >
                <Check className='size-5' />
              </Button>
            </AdminAlertModal>
            <AdminAlertModal alertType='reject' data={row.original}>
              <Button
                variant='ghost'
                size='icon'
                className='text-red-500 hover:text-red-600 bg-red-50'
              >
                <X className='size-5' />
              </Button>
            </AdminAlertModal>
            <ReviewApplicationModal status={status} data={row.original}>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-500 hover:text-gray-600 bg-gray-50'
              >
                <Eye className='size-5' />
              </Button>
            </ReviewApplicationModal>
            <TableDropdown data={row.original} />
          </div>
        );
      }

      return (
        <div className='flex items-center gap-2'>
          <EditAction data={row.original} source='pro' />
          <MessageModal data={row.original}>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-500 hover:text-gray-600 bg-gray-50'
            >
              <Mail className='size-5' />
            </Button>
          </MessageModal>
          <ReviewApplicationModal status={status} data={row.original}>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-500 hover:text-gray-600 bg-gray-50'
            >
              <Eye className='size-5' />
            </Button>
          </ReviewApplicationModal>
          <TableDropdown data={row.original} />
        </div>
      );
    },
  },
];
export const partnerColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'fullName',
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
      const firstName = row.original.personalInfo?.firstName || '';
      const lastName = row.original.personalInfo?.lastName || '';
      const companyName = row.original.personalInfo?.companyName || '';
      const image = row.original.personalInfo?.image || '';
      return (
        <div className='flex items-center gap-3'>
          <Image
            unoptimized
            src={image || '/dummy-profile-pic.jpg'}
            alt={`${firstName} ${lastName}`}
            className='rounded-full object-cover size-10'
            width={40}
            height={40}
          />

          <div>
            <p className='font-medium'>
              {`${firstName} ${lastName}`.trim() || 'N/A'}
            </p>
            <p className='text-sm text-gray-500'>{companyName || 'N/A'}</p>
          </div>
        </div>
      );
    },
    sortingFn: (rowA, rowB) => {
      const nameA =
        `${rowA.original.personalInfo?.firstName || ''} ${rowA.original.personalInfo?.lastName || ''}`
          .trim()
          .toLowerCase();
      const nameB =
        `${rowB.original.personalInfo?.firstName || ''} ${rowB.original.personalInfo?.lastName || ''}`
          .trim()
          .toLowerCase();
      return nameA.localeCompare(nameB);
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
    accessorKey: 'personalInfo.phone',
    header: 'Phone Number',
    cell: ({ row }) => {
      const phone = row.original.personalInfo?.phone || '';
      return <span>{phone || 'N/A'}</span>;
    },
  },
  {
    accessorKey: 'createdAt',
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
    cell: ({ row }) => {
      const createdAt = row.original.createdAt || '';
      return <span>{moment(createdAt).format('DD-MM-YYYY')}</span>;
    },
  },
  {
    accessorKey: 'personalInfo.industry',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Industry
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const industry = row.original.personalInfo?.industry || '';
      return <span>{industry || 'N/A'}</span>;
    },
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className='flex items-center gap-2'>
          <EditAction data={row.original} source='partner' />
          <MessageModal data={row.original}>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-500 hover:text-gray-600 bg-gray-50'
            >
              <Mail className='size-5' />
            </Button>
          </MessageModal>
          <ReviewApplicationModal from='partner' data={row.original}>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-500 hover:text-gray-600 bg-gray-50'
            >
              <Eye className='size-5' />
            </Button>
          </ReviewApplicationModal>
          <TableDropdown data={row.original} />
        </div>
      );
    },
  },
];
