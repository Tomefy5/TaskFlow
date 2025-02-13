import Footer from "@/components/mycomponents/Footer";
import Header from "@/components/mycomponents/Header";

export default function BasicLayout({ children }) {
  return (
    <div className="relative w-full h-full min-h-screen flex flex-col pb-24">
      <Header />
      <main>{children}</main>
      <Footer />  
    </div>
  );
}
