import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: "about", name: "About" },
    { id: "mission", name: "Mission" },
    { id: "history", name: "History" },
    { id: "products", name: "Products" },
    { id: "services", name: "Services" },
    { id: "strengths", name: "Strengths" },
    { id: "contact", name: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm border-b border-white/10"
      style={{
        background:
          "linear-gradient(180deg, rgba(46,49,146,0.95), rgba(46,49,146,0.85))",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-black text-lg shadow-lg"
              style={{
                background: "linear-gradient(135deg, #F7931E, #FFA947)",
              }}
            >
              K
            </div>
            <span className="font-bold text-xl text-white uppercase tracking-wide">
              Knock Store
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-gray-300 hover:text-white transition-all duration-200 font-medium cursor-pointer"
              >
                {section.name}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-all duration-200 cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="block w-full text-left py-2 text-gray-300 hover:text-white transition-all duration-200"
              >
                {section.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section
      className="py-20 px-4"
      style={{
        background:
          "radial-gradient(600px 300px at 90% -10%, rgba(247,147,30,0.12), transparent 60%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-orange-200 bg-orange-900/30 border border-orange-600/30 px-3 py-1 rounded-full mb-4">
              One‑Stop Service • บริการครบวงจร
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              ของใช้สิ้นเปลืองสำหรับร้านอาหาร <br />
              พร้อมจัดส่งรวดเร็ว ครบถ้วน
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              เราไม่ได้ส่งแค่ของใช้ — เราส่งมอบความมั่นใจ ความสะดวก
              และความคุ้มค่าให้กับทุกร้านอาหารที่เลือกน็อคสโตร์เป็นคู่ค้า
              "สั่งวันนี้ ได้พรุ่งนี้" ครอบคลุมกรุงเทพฯ ปริมณฑล และหัวเมืองหลัก
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 rounded-lg font-semibold text-black shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #F7931E, #FFA947)",
                }}
              >
                ขอใบเสนอราคา
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 rounded-lg font-semibold text-white border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-200"
              >
                ดูรายการสินค้า
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center p-4 rounded-lg border border-dashed border-white/20">
                <div className="text-2xl font-bold text-white">300+</div>
                <div className="text-sm text-gray-400">รายการสินค้า</div>
              </div>
              <div className="text-center p-4 rounded-lg border border-dashed border-white/20">
                <div className="text-2xl font-bold text-white">20</div>
                <div className="text-sm text-gray-400">ประเภทหลัก</div>
              </div>
              <div className="text-center p-4 rounded-lg border border-dashed border-white/20">
                <div className="text-2xl font-bold text-white">≤ 24 ชม.</div>
                <div className="text-sm text-gray-400">จัดส่งรวดเร็ว*</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              * สั่งก่อน 09:00 จัดส่งภายในวันหรือไม่เกิน 24 ชม.
            </p>
          </div>
          <div>
            <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-3">
                คำกล่าวจากผู้บริหาร (CEO)
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                "เราไม่ได้ส่งแค่ของใช้ แต่ส่งมอบความมั่นใจ ความสะดวก
                และความคุ้มค่า เพราะเราเติบโตไปพร้อมกับคุณ" —
                <strong> วรวัทย์ วีวัฒนาธรรม</strong>
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="text-orange-300 font-semibold text-sm whitespace-nowrap">
                    2018–ปัจจุบัน
                  </div>
                  <div className="text-gray-400 text-sm">
                    คู่ค้าหลักของ <strong>สุกี้ตี๋น้อย</strong>{" "}
                    ครบทุกสาขาทั่วประเทศ
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-orange-300 font-semibold text-sm whitespace-nowrap">
                    2022–ปัจจุบัน
                  </div>
                  <div className="text-gray-400 text-sm">
                    เริ่มส่งให้ <strong>ลัคกี้สุกี้</strong>{" "}
                    และแบรนด์แฟรนไชส์หลายสาขา
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-orange-300 font-semibold text-sm whitespace-nowrap">
                    2024–ปัจจุบัน
                  </div>
                  <div className="text-gray-400 text-sm">
                    ขยายความครอบคลุมบริการ • "สั่งวันนี้ ได้พรุ่งนี้"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section = ({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs font-semibold text-orange-200 bg-orange-900/30 border border-orange-600/30 px-3 py-1 rounded-full mb-4">
          {kicker}
        </span>
        <h2 className="text-3xl font-bold text-white mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
};

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-lg">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{children}</p>
    </div>
  );
};

const TimelineItem = ({
  year,
  description,
}: {
  year: string;
  description: string;
}) => {
  return (
    <div className="flex gap-4 relative">
      <div className="relative">
        <div
          className="w-3 h-3 rounded-full mt-2 shadow-lg"
          style={{ background: "linear-gradient(135deg, #F7931E, #FFA947)" }}
        ></div>
        <div className="absolute top-5 left-1.5 w-0.5 h-full bg-white/10"></div>
      </div>
      <div className="flex-1 pb-8">
        <div className="text-orange-300 font-semibold mb-1">{year}</div>
        <div className="text-gray-400 text-sm">{description}</div>
      </div>
    </div>
  );
};

const Timeline = ({ children }: { children: React.ReactNode }) => {
  return <div className="ml-2">{children}</div>;
};

const TickItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-3 items-start mb-3">
      <div
        className="w-5 h-5 rounded-md flex-shrink-0 shadow-lg"
        style={{ background: "linear-gradient(135deg, #F7931E, #FFA947)" }}
      ></div>
      <p className="text-gray-400 text-sm">{children}</p>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © {currentYear} Knock Store Co., Ltd.
          </div>
          <div className="text-gray-400 text-sm">
            One‑Stop Supplies for Restaurants • สั่งวันนี้ ได้พรุ่งนี้
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-6">
          Designed from provided slide content.
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(180deg, #2E3192, #1e2158)" }}
    >
      <Header />
      <Hero />

      <Section id="about" kicker="About Company" title="เกี่ยวกับบริษัท">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="เราคือใคร">
            บริษัท น็อคสโตร์ จำกัด
            จัดจำหน่ายของใช้สิ้นเปลืองสำหรับร้านอาหารทุกประเภท เช่น
            น้ำยาทำความสะอาด กระดาษ ถุง ฟิล์ม บรรจุภัณฑ์ และอุปกรณ์ทำความสะอาด
          </Card>
          <Card title="สิ่งที่เราให้ความสำคัญ">
            บริการจัดส่งที่รวดเร็ว ถูกต้อง ครบถ้วนทุกออเดอร์
            เพื่อช่วยลดต้นทุนและประหยัดเวลาลูกค้า
          </Card>
          <Card title="พันธกิจ">
            เป็นคู่ค้าที่ขาดไม่ได้ของทุกร้านอาหาร
            สร้างมาตรฐานใหม่ของผู้ให้บริการซัพพลายเออร์สำหรับธุรกิจอาหาร
          </Card>
        </div>
      </Section>

      <Section id="mission" kicker="Mission & Vision" title="เป้าหมายและมุมมอง">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="เป้าหมาย">
            ทำให้ทุกความต้องการของร้านอาหาร ง่ายและครบวงจรที่สุด
            พร้อมช่วยลดต้นทุนและเวลาในการดูแลสินค้า
          </Card>
          <Card title="มุมมอง">
            สร้างมาตรฐานบริการซัพพลายเออร์ที่เหนือกว่า
            เพื่อธุรกิจอาหารในประเทศไทย
          </Card>
          <Card title="แคมเปญหลัก">
            "สั่งวันนี้ ได้พรุ่งนี้"
            ด้วยเครือข่ายและระบบการขนส่งที่มีประสิทธิภาพ
          </Card>
        </div>
      </Section>

      <Section
        id="history"
        kicker="Company History"
        title="เส้นทางความไว้วางใจ"
      >
        <Timeline>
          <TimelineItem
            year="2018"
            description="เริ่มจัดส่งสินค้าให้สุกี้ตี๋น้อย ตั้งแต่สาขาแรก จนปัจจุบันครบทุกสาขาทั่วประเทศ"
          />
          <TimelineItem
            year="2022"
            description="เริ่มส่งให้ลัคกี้สุกี้ ตั้งแต่สาขาแรก ปัจจุบันครบ 31 สาขาทั่วประเทศ"
          />
          <TimelineItem
            year="2022–2023"
            description="ขยายฐานลูกค้าหลายสาขา: ย่างเนย, ติดมันส์, สุกี้จินดา, เจริญรส, จ่าอูหมูกระทะ, เครืออำแดงใต้ฝุ่น, ฮอตพอตแมน"
          />
          <TimelineItem
            year="2024–ปัจจุบัน"
            description={
              'ยกระดับโลจิสติกส์และการบริการ "สั่งวันนี้ ได้พรุ่งนี้"'
            }
          />
        </Timeline>
      </Section>

      <Section id="products" kicker="Products" title="ผลิตภัณฑ์ของเรา">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card title="น้ำยาทำความสะอาด">
            ล้างจาน ถูพื้น ล้างห้องน้ำ เช็ดกระจก สบู่ล้างมือ และอื่น ๆ
          </Card>
          <Card title="กระดาษประเภทต่าง ๆ">
            กระดาษป็อปอัพ กระดาษเช็ดมือ กระดาษชำระ ฯลฯ
          </Card>
          <Card title="ถุงประเภทต่าง ๆ">
            ถุงร้อน ถุงเย็น ถุงหูหิ้ว ถุงขยะ ถุงพิมพ์โลโก้
          </Card>
          <Card title="ฟิล์ม & บรรจุภัณฑ์อาหาร">
            ฟิล์มห่ออาหาร กล่องอาหารเหลี่ยม/กลม กล่องซูชิ กล่องเบนโตะ
            ถ้วยน้ำจิ้ม
          </Card>
          <Card title="อุปกรณ์ทำความสะอาด">
            สก๊อตไบรต์ ฟองน้ำ ฝอยขัด ไม้ถูพื้น แปรงขัดพื้น และอื่น ๆ
          </Card>
          <Card title="One‑Stop">
            สินค้าครบทุกประเภทสำหรับร้านอาหาร — หลากหลาย ครบ จบที่เดียว
          </Card>
        </div>
        <div className="space-y-3">
          <TickItem>
            สินค้ามากกว่า <strong>300 รายการ</strong> ครอบคลุม{" "}
            <strong>20 ประเภท</strong>
          </TickItem>
          <TickItem>
            ลูกค้าไม่ต้องสต็อกจริงจัง — จัดส่งรวดเร็วช่วยลดพื้นที่และต้นทุนสต็อก
          </TickItem>
        </div>
      </Section>

      <Section id="services" kicker="Services" title="บริการของเรา">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card title="ผลิตภัณฑ์ครบวงจร">
            มีสินค้าของใช้สิ้นเปลืองทุกรายการที่ร้านอาหารต้องใช้
          </Card>
          <Card title="สต็อกพร้อมส่ง">
            สต็อกเพียงพอต่อความต้องการ รองรับการสั่งซ้ำและหลายสาขา
          </Card>
          <Card title="บริการขนส่ง">
            จัดส่งครบถ้วน รวดเร็ว ถึงที่หมายตามต้องการ
          </Card>
        </div>
        <Card title="ความครอบคลุมด้านโลจิสติกส์">
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            {[
              "กรุงเทพฯ และปริมณฑล",
              "นครสวรรค์ • ชลบุรี • พัทยา",
              "นครราชสีมา • บุรีรัมย์",
              "เชียงใหม่ • พิษณุโลก • ขอนแก่น",
              "ราชบุรี • ประจวบคีรีขันธ์ • ชุมพร",
            ].map((location, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 rounded-lg border border-white/10"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#F7931E" }}
                ></div>
                <span className="text-gray-400 text-sm">{location}</span>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section
        id="strengths"
        kicker="Why Knock Store"
        title="เหตุผลที่ลูกค้าเลือกเรา"
      >
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card title="ระบบขนส่งรวดเร็ว">
            จัดการขนส่งพร้อม ส่งถึงสาขาลูกค้าอย่างถูกต้อง ครบถ้วน รวดเร็ว
            (สั่งก่อน 09:00 จัดส่งภายในวัน/ไม่เกิน 24 ชม.)
          </Card>
          <Card title="ลดต้นทุนโลจิสติกส์ ~8%">
            ไม่ต้องไปรับหรือกระจายสินค้าเอง ทำให้ออเดอร์รวมมีต้นทุนที่แข่งขันได้
          </Card>
          <Card title="ราคาดีจากแหล่งผลิต">
            สั่งซื้อจากโรงงานผู้ผลิตเป็นปริมาณมาก จึงเสนอราคาที่คุ้มค่า
          </Card>
          <Card title="หลากหลาย ครบ จบ">
            มากกว่า 300 รายการ ครอบคลุม 20 ประเภทสินค้า
          </Card>
          <Card title="ไม่ต้องสต็อกเยอะ">
            ความเร็วในการจัดส่งช่วยลดพื้นที่และต้นทุนสต็อกของลูกค้า
          </Card>
          <Card title="ลูกค้าหลายสาขาไว้ใจ">
            เชี่ยวชาญการให้บริการลูกค้าที่มีหลายสาขาและต้องการความสม่ำเสมอ
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            ลูกค้าของเรา
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "สุกี้ตี๋น้อย",
              "ลัคกี้สุกี้",
              "ย่างเนย",
              "ติดมันส์",
              "สุกี้จินดา",
              "เจริญรส",
              "จ่าอูหมูกระทะ",
              "เครืออำแดงใต้ฝุ่น",
              "ฮอตพอตแมน",
            ].map((customer, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm"
              >
                {customer}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" kicker="Contact" title="ติดต่อเรา">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="สำนักงานใหญ่">
            <div className="space-y-2">
              <p>บริษัท น็อคสโตร์ จำกัด</p>
              <p>103 หมู่ 1 ต.บางศรีเมือง อ.เมืองนนทบุรี จ.นนทบุรี 11000</p>
              <p>
                โทร:{" "}
                <a
                  href="tel:0892013316"
                  className="text-orange-300 hover:text-orange-200"
                >
                  089-201-3316
                </a>
              </p>
            </div>
          </Card>

          <Card title="ขอใบเสนอราคา">
            <p className="mb-4">กรอกแบบฟอร์มและทีมงานจะติดต่อกลับโดยเร็ว</p>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("ขอบคุณที่ติดต่อเรา! ทีมงานจะติดต่อกลับโดยเร็วที่สุด");
              }}
            >
              <div className="grid grid-cols-2 gap-2">
                <input
                  required
                  placeholder="ชื่อ"
                  className="px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 text-sm"
                />
                <input
                  required
                  placeholder="เบอร์โทร"
                  className="px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 text-sm"
                />
              </div>
              <input
                placeholder="อีเมล (ถ้ามี)"
                className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 text-sm"
              />
              <textarea
                placeholder="ความต้องการสินค้า/บริการ"
                rows={4}
                className="w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 text-sm"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg font-semibold text-black shadow-lg hover:shadow-xl transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #F7931E, #FFA947)",
                }}
              >
                ส่งคำขอ
              </button>
            </form>
          </Card>

          <Card title="ชั่วโมงทำการ">
            <div className="space-y-2">
              <p>จันทร์–เสาร์ • 08:30–17:30</p>
              <p className="text-xs text-gray-500">
                *เวลาทำการจัดส่งขึ้นกับพื้นที่ ให้ทีมงานยืนยันรอบจัดส่งอีกครั้ง
              </p>
            </div>
          </Card>
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">
          ที่มาเนื้อหา: Company profile PDF ของลูกค้า
        </p>
      </Section>

      <Footer />
    </div>
  );
}
