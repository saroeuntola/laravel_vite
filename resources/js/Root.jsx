import React from 'react'

const Root = () => {
    const x = 20;
    console.log(x);
    return (

      <div className='flex flex-column h-screen w-screen'>
        <header className='fixed top-0 left-0 w-full bg-white shadow-md'>
          <h1 className='text-2xl font-bold'>Header</h1>
        </header>
        <main className='flex-grow'>
          <div className='p-4'>
            <h1 className='text-4xl font-bold'>Main Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
              pulvinar turpis, vel condimentum velit consectetur vel. Sed
              consectetur, felis vel tristique scelerisque, sapien nunc
              condimentum justo, a dignissim mauris ex et ligula. Sed et mauris
              vel felis placerat elementum. In hac habitasse platea dictumst.
            </p>
          </div>
          </main>
    </div>
  )
}

export default Root
