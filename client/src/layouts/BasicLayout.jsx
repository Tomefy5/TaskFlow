import Footer from "@/components/mycomponents/Footer";
import Header from "@/components/mycomponents/Header";

export default function BasicLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
