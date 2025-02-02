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

const chartData = [
  { month: 'Jan', '2024': 150, '2025': 220 },
  { month: 'Feb', '2024': 140, '2025': 190 },
  { month: 'Mar', '2024': 90, '2025': 195 },
  { month: 'Apr', '2024': 120, '2025': 180 },
  { month: 'May', '2024': 150, '2025': 160 },
  { month: 'Jun', '2024': 180, '2025': 235 },
  { month: 'Jul', '2024': 190, '2025': 225 },
  { month: 'Aug', '2024': 200, '2025': 235 },
  { month: 'Sep', '2024': 180, '2025': 235 },
  { month: 'Oct', '2024': 160, '2025': 235 },
  { month: 'Nov', '2024': 150, '2025': null },
  { month: 'Dec', '2024': 140, '2025': null },
];

export default function OverviewPage() {
  return (
    <div className='space-y-6'>
      <Title className='mb-4 sm:mb-6' text='Overview' />

      <div className='grid gap-4 sm:gap-6 md:grid-cols-3'>
        {[
          {
            title: "Pro's",
            count: '2,245',
            change: '+460 from last month',
            icon: FileBadge,
          },
          {
            title: "Partner's",
            count: '181',
            change: '+120 from last month',
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

        <Card className='shadow-none border-none rounded-[12px] sm:rounded-[16px]'>
          <CardContent className='p-4 sm:p-8'>
            <div className='flex justify-between items-start'>
              <div className='space-y-6 sm:space-y-10'>
                <p className='text-base sm:text-lg font-semibold'>
                  Pending Applications
                </p>

                <span className='inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-[#FAB607] text-white rounded-full text-xs sm:text-sm'>
                  3
                </span>
              </div>
              <div className='flex flex-col justify-between gap-8 sm:gap-12'>
                <Clock className='w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground' />
                <ChevronRight className='w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground' />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className='shadow-none border-none rounded-[16px]'>
        <CardContent className='p-4 sm:p-6'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4'>
            <Title
              className='mb-2 sm:mb-0 text-lg sm:text-xl'
              text='Registrations'
            />
            <Select defaultValue='lastYear'>
              <SelectTrigger className='w-full sm:w-[150px] py-3 sm:py-4 text-secondary font-medium text-sm sm:text-base px-3 sm:px-4 bg-[#F9F9FA] border-none shadow-none rounded-[12px] sm:rounded-[16px]'>
                <SelectValue placeholder='Select period' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='lastYear'>Last Year</SelectItem>
                <SelectItem value='lastMonth'>Last Month</SelectItem>
                <SelectItem value='last90Days'>Last 90 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue='pros' className='mb-4'>
            <TabsList className='rounded-[8px] bg-[#F9F9FA] p-1 sm:p-2 py-4 sm:py-6'>
              <TabsTrigger
                value='pros'
                className='rounded-[8px] py-1 sm:py-2 px-2 sm:px-4'
              >
                Pro's
              </TabsTrigger>
              <TabsTrigger
                value='partners'
                className='rounded-[8px] py-1 sm:py-2 px-2 sm:px-4'
              >
                Partner's
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className='h-[400px] mt-8 bg-[#F9F9FA] rounded-[16px] pl-0 p-6'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray='3 3' vertical={false} />

                <XAxis
                  dataKey='month'
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                  ticks={[0, 50, 100, 150, 200, 250, 300]}
                />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='2025'
                  stroke='#008000'
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type='monotone'
                  dataKey='2024'
                  stroke='#BBF8DC'
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
