/* ═══════════════════════════════════════════
   data.js — Portfolio Content / CV Data
   Edit file ini untuk update konten portfolio
   ═══════════════════════════════════════════ */

const DATA = {

  profile: {
    name:     "Abeil Rafli Aldhani",
    tagline:  "// Fresh graduate · Informatics Engineering",
    motto:    [
      "Always Learning, Always Growing",
      "Learn Today, Lead Tomorrow",
      "Driven by Curiosity",
      "Building Skills, Creating Impact",
      "Progress Through Persistence"
    ],
    summary: [
      "Fresh Graduate S1 Teknik Informatika dengan latar belakang Teknik Komputer dan Jaringan. Saya memiliki kompetensi dalam instalasi, konfigurasi, dan troubleshooting sistem operasi Windows dan Linux.",
      "Dengan pemahaman mendalam tentang TCP/IP, subnetting, routing, switching, VLAN, serta tools keamanan jaringan seperti Nmap, Wireshark, dan Burp Suite.",
      "Motivasi tinggi untuk berkembang sebagai <strong style=\"color:var(--cyan)\">IT Support</strong>, <strong style=\"color:var(--cyan)\">Network Engineer</strong>, atau <strong style=\"color:var(--cyan)\">Cyber Security Professional</strong>."
    ],
    stats: [
      { num: "4+", label: "Tahun Pengalaman Kerja" },
      { num: "4",  label: "Sertifikat Profesional" },
      { num: "S1", label: "Teknik Informatika" },
      { num: "2+", label: "Project Selesai" }
    ]
  },

  contact: {
    email:    "abeilrfl@gmail.com",
    github:   "Unknown7529",
    linkedin: "https://www.linkedin.com/in/abeil-rafli/",
    location: "Cibinong, Bogor"
    
  },

  skills: [
    {
      icon: "🖥️",
      title: "Sistem Operasi",
      tags: ["Windows", "Linux", "Windows Server"],
      amber: false
    },
    {
      icon: "🌐",
      title: "Jaringan Komputer",
      tags: ["TCP/IP", "Subnetting", "Routing", "Switching", "VLAN", "Access Point", "LAN"],
      amber: false
    },
    {
      icon: "🛡️",
      title: "Cyber Security",
      tags: ["Nmap", "Burp Suite", "Wireshark", "Firewall", "Penetration Testing"],
      amber: true
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      tags: ["AWS EC2", "AWS S3", "IAM", "VPC", "RDS", "CloudWatch"],
      amber: false
    },
    {
      icon: "💻",
      title: "Pengembangan",
      tags: ["Web App", "Java", "IoT", "Decision Support", "Reservasi Online"],
      amber: false
    },
    {
      icon: "🔧",
      title: "Tools & Lainnya",
      tags: ["Mikrotik", "Microsoft Office", "Git", "Docker"],
      amber: [false, false, true, true]
    }
  ],

  experience: [
    {
      date:    "NOV 2024 – FEB 2026",
      role:    "Operator Gudang",
      company: "PT Serena Indopangan Industri — Cibinong",
      duties: [
        "Memastikan, menerima dan memeriksa barang yang akan didistribusikan sesuai jumlahnya dengan dokumen",
        "Menyusun barang di gudang sesuai dengan jenis dan tipenya masing-masing",
        "Menuliskan label identitas untuk setiap barang yang keluar"
      ]
    },
    {
      date:    "NOV 2020 – AGU 2024",
      role:    "Helper Produksi",
      company: "PT Medifarma Laboratories — Depok",
      duties: [
        "Membantu dalam mengoperasikan mesin atau peralatan produksi di bawah pengawasan",
        "Membantu dalam menyiapkan dan mengatur bahan yang diperlukan untuk proses produksi",
        "Memastikan ketersediaan dan kondisi bahan baku sebelum proses dimulai",
        "Menyusun dan mengatur peralatan yang diperlukan di area produksi"
      ]
    }
  ],

  education: [
    {
      year:   "2021 – 2026",
      school: "Universitas Indraprasta PGRI",
      field:  "S1 Teknik Informatika",
      items: [
        "🌐 Pembuatan Aplikasi dan Website Reservasi Online",
        "💡 Pembuatan Aplikasi Sistem Pendukung Keputusan Berbasis Java"
      ]
    },
    {
      year:   "2016 – 2019",
      school: "SMK Insan Kreatif",
      field:  "Teknik Komputer dan Jaringan",
      items: [
        "🏆 Juara 4 LKS IT Networking Support tingkat Kab. Bogor",
        "⚙️ Project Automatic Height Gauge berbasis IoT"
      ]
    }
  ],

  certifications: [
    {
      icon:   "🔴",
      title:  "Mikrotik Certified Network Associate (MTCNA)",
      detail: "Sep 2019 – Sep 2022"
    },
    {
      icon:   "🔵",
      title:  "MTA: Networking Fundamentals",
      detail: "Microsoft Technology Associate · Jun 2018 – Sekarang"
    },
    {
      icon:   "🐧",
      title:  "Linux System Administration",
      detail: "Btech Academy · Mei 2025 – Sekarang"
    },
    {
      icon:   "☁️",
      title:  "AWS re/Start Cloud Computing",
      detail: "Amazon Web Services · Jun 2025 – Sekarang"
    }
  ]

};
