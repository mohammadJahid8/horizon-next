import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useAppContext } from '@/lib/context';
import AddMore from '../professional-info/add-more';
import { Textarea } from '@/components/ui/textarea';

export function PartnerRequestModal() {
  const { isPartnerOpen, closePartner } = useAppContext();
  return (
    <Dialog open={isPartnerOpen} onOpenChange={closePartner}>
      <DialogContent className='sm:max-w-[800px] bg-accent gap-6'>
        <DialogHeader className='font-semibold text-base md:text-lg text-start'>
          The below requirements will be requested from the candidate
        </DialogHeader>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4 bg-white py-3 px-4 rounded-sm'>
            <p className='text-base font-medium'>Documents to be provided</p>
            <div className='rounded-[16px] border border-[#DFE2E0] py-5 px-4'>
              <p className='text-sm font-medium pb-2'>Title</p>
              <Input
                placeholder='Ex: Patient Service Fundamentals'
                className='rounded-[12px] h-11'
              />
            </div>

            <AddMore
              handleAdd={() => {}}
              iconBgColor='bg-primary'
              textColor='text-primary'
            />
          </div>
          <div className='flex flex-col gap-2 bg-white py-3 px-4 rounded-sm'>
            <p className='text-base font-medium'>Notes</p>
            <Textarea
              placeholder='Write your message and more details for the pro..'
              className='rounded-[12px] h-40'
            />
          </div>
        </div>
        <DialogFooter className='flex flex-row gap-4 '>
          <DialogClose asChild>
            <Button
              variant='outline'
              className='w-full md:h-[60px] rounded-[12px]'
            >
              Cancel
            </Button>
          </DialogClose>
          <Button className='w-full md:h-[60px] rounded-[12px]'>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
