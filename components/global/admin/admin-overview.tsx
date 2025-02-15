'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Building2, FileBadge, ChevronRight, Clock } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import Title from '../title';
import { useAppContext } from '@/lib/context';
import Link from 'next/link';
import { useState } from 'react';
import moment from 'moment';
import { useEffect } from 'react';
import Chart from './chart';
const chartData = [
  { month: 'Jan', PRO: 150, PARTNER: 220 },
  { month: 'Feb', PRO: 140, PARTNER: 190 },
  { month: 'Mar', PRO: 90, PARTNER: 195 },
  { month: 'Apr', PRO: 120, PARTNER: 180 },
  { month: 'May', PRO: 150, PARTNER: 160 },
  { month: 'Jun', PRO: 180, PARTNER: 235 },
  { month: 'Jul', PRO: 190, PARTNER: 225 },
  { month: 'Aug', PRO: 200, PARTNER: 235 },
  { month: 'Sep', PRO: 180, PARTNER: 235 },
  { month: 'Oct', PRO: 160, PARTNER: 235 },
  { month: 'Nov', PRO: 150, PARTNER: null },
  { month: 'Dec', PRO: 140, PARTNER: null },
];

export default function OverviewPage() {
  const { pros, partners } = useAppContext();

  const currentMonth = moment().format('YYYY-MM');
  const lastMonth = moment().subtract(1, 'month').format('YYYY-MM');

  const countUsersByMonth = (users: any) => ({
    current:
      users?.filter(
        (user: any) => moment(user.createdAt).format('YYYY-MM') === currentMonth
      ).length || 0,
    lastMonth:
      users?.filter(
        (user: any) => moment(user.createdAt).format('YYYY-MM') === lastMonth
      ).length || 0,
  });

  const proStats = countUsersByMonth(pros);
  const partnerStats = countUsersByMonth(partners);

  const formatChange = (change: any) => {
    return change >= 0
      ? `+${change} from last month`
      : `${change} from last month`;
  };

  const pendingPros =
    pros?.filter((user: any) => user.status === 'pending') || [];
  return (
    <div className='space-y-6'>
      <Title className='mb-4 sm:mb-6' text='Overview' />

      <div className='grid gap-4 sm:gap-6 md:grid-cols-3'>
        {[
          {
            title: "Pro's",
            count: pros?.length,
            change: formatChange(proStats.current - proStats.lastMonth),
            icon: FileBadge,
          },
          {
            title: "Partner's",
            count: partners?.length,
            change: formatChange(partnerStats.current - partnerStats.lastMonth),
            icon: Building2,
          },
        ].map((item, index) => (
          <Card
            key={index}
            className='shadow-none border-none rounded-[12px] sm:rounded-[16px]'
          >
            <CardContent className='p-4 sm:p-8'>
              <div className='flex justify-between items-start'>
                <div className='space-y-2 sm:space-y-4'>
                  <p className='text-base sm:text-lg font-semibold'>
                    {item.title}
                  </p>
                  <div className='flex flex-col gap-0.5 sm:gap-1'>
                    <p className='text-xl sm:text-2xl font-bold text-secondary'>
                      {item.count}
                    </p>
                    <p className='text-xs sm:text-sm text-muted-foreground'>
                      {item.change}
                    </p>
                  </div>
                </div>
                <item.icon className='w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground' />
              </div>
            </CardContent>
          </Card>
        ))}

        <Link href='/admin/pros?status=pending'>
          <Card className='shadow-none border-none rounded-[12px] sm:rounded-[16px]'>
            <CardContent className='p-4 sm:p-8'>
              <div className='flex justify-between items-start'>
                <div className='space-y-6 sm:space-y-10'>
                  <p className='text-base sm:text-lg font-semibold'>
                    Pending Applications
                  </p>

                  <span className='inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-[#FAB607] text-white rounded-full text-xs sm:text-sm'>
                    {pendingPros?.length}
                  </span>
                </div>
                <div className='flex flex-col justify-between gap-8 sm:gap-12'>
                  <Clock className='w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground' />
                  <ChevronRight className='w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground' />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Chart pros={pros} partners={partners} />
    </div>
  );
}
