import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className='container my-6'>
      <div className='mb-3'>
        <p className="title is-5 is-spaced"><span className='title is-3 is-spaced'>Welcome to </span><span className='title is-3 is-spaced has-text-primary'>ATLANTIS</span> the best management system for water parks!</p>
      </div>
        <div className="level is-alignitems-center">
          <div className="level-item">
            <figure className="image" style={{height: '100%', width: '100%' }}>
              <Image src="/Summer.svg" alt="" width={0} height={0} className="content has-text-centered" style={{height: '100%', width: '100%' }} />
            </figure>
          </div>
        </div>
        
      </section>
    </>
  );
}
