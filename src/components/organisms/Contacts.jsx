import React from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contacts() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      value: '636justin@gmail.com',
      link: 'mailto:636justin@gmail.com',
      description: 'Feel free to reach out for collaborations or just a friendly hello'
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      value: '+254 112 418 037',
      link: 'https://wa.me/254112418037',
      description: 'Let\'s chat about your project or opportunities'
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: 'LinkedIn',
      value: 'Justin Kirui',
      link: 'https://linkedin.com/in/justin-kirui',
      description: 'Connect with me professionally'
    },
    {
      icon: <FaGithub className="text-2xl" />,
      title: 'GitHub',
      value: 'justoo67',
      link: 'https://github.com/justoo67',
      description: 'Check out my code repositories'
    }
  ];

  return (
    <section id="contact" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-200 mb-8">
          <span className="text-[#1F7D53] font-mono">04.</span> Get In Touch
        </h2>
        <p className="text-slate-400 max-w-xl mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#112240] p-6 rounded-lg hover:transform hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-[#1F7D53] group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2">{method.title}</h3>
                  <p className="text-[#1F7D53] mb-2">{method.value}</p>
                  <p className="text-slate-400 text-sm">{method.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">
            You can also reach out to me directly through this form:
          </p>
          <form className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#112240] text-slate-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#1F7D53]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#112240] text-slate-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#1F7D53]"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full bg-[#112240] text-slate-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#1F7D53]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#1F7D53] text-white px-8 py-3 rounded hover:bg-[#1F7D53]/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;