import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section>
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
