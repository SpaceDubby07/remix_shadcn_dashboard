import Content from '~/components/dashboard/Content';
// import Footer from '~/components/dashboard/Footer';
// import Sidebar from '~/components/dashboard/Sidebar';
// import Topbar from '~/components/dashboard/Topbar';

export default function Dashboard() {
  return (
    // <div className="grid grid-cols-12 grid-rows-[auto_1fr] gap-0 h-screen">
    //   <div className="col-span-12 h-12">
    //     <Topbar />
    //   </div>
    //   <div className="col-span-1 row-span-10 row-start-2">
    //     <Sidebar />
    //   </div>
    //   <div className="col-span-11 row-span-10 col-start-2">
    //     <Content />
    //   </div>
    //   <div className="col-span-12 row-start-12 h-8">
    //     <Footer />
    //   </div>
    // </div>
    <div className="h-screen max-w-screen-2xl mx-auto">
      <Content />
    </div>
  );
}
