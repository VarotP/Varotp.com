const Footer = () => (
  <div className="footer">
    <hr className="border-t border-blue-300 mt-6 mx-4 md:mx-20" />
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-20 py-6 md:py-10">
      <p className="text-center text-gray-500 text-sm">
        Built with Next.js and Tailwind CSS, Deployed on Vercel. Integrated with Notion.
      </p>
      <p className="text-center text-gray-500 text-sm">
        © 2025 Varot Pavaritpong. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer; 