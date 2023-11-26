import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Index() {
  const router = useRouter();
  const { id } = router.query;
  
  const services = [
    { id: 1, name: 'Request Cin',path : '/Request'},
    { id: 2, name: 'Request Passport',path : '/subServices'},
    { id: 3, name: 'Request Driving Licence',path : '/subServices'},
    { id: 4, name: 'Request Birth Certificate',path : '/underServices'},
    { id: 5, name: 'Request Death Certificate',path : '/underServices'},
    { id: 6, name: 'Request Marriage Certificate',path : '/underServices'},
    { id: 7, name: 'Request Divorce Certificate',path : '/underServices'},
    { id: 8, name: 'Request Criminal Record',path : '/underServices'},
    
  ];
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap justify-center">
        {services.map((sub) => (
          <div key={sub.id} className="w-64 p-4 bg-white rounded-lg shadow-md m-4 flex flex-col justify-center items-center">

          

<Link href={`${sub.path}/${sub.id}`}>
              <div className="font-semibold text-lg mb-2 text-black">{sub.name}</div>
            </Link>
       
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
