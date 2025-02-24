import { getResourcePagesData } from '@/app/actions';
import Container from '@/components/global/container';
import { urlFor } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import React from 'react';

const TermsPage = async () => {
  const data = await getResourcePagesData();

  return (
    <div>
      <Container className='my-32'>
        <PortableText
          value={data.termsAndConditions}
          components={{
            types: {
              image: ({ value }) => (
                <div className='my-4'>
                  <img
                    src={urlFor(value.asset)}
                    alt={value.alt || 'Sanity Image'}
                    className='w-full max-w-[500px]'
                  />
                </div>
              ),
            },
          }}
        />
      </Container>
    </div>
  );
};

export default TermsPage;
