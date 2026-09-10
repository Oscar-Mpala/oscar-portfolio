import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, Instagram, CheckCircle } from 'lucide-react';

interface ContactProps {
  siteInfo: any;
}

export default function Contact({ siteInfo }: ContactProps) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Default to Organic
  const [referrer, setReferrer] = useState('Organic (Google/Direct)');

  useEffect(() => {
    // CHANGED: Reading from sessionStorage instead of localStorage
    const savedRef = sessionStorage.getItem('affiliate_ref');
    if (savedRef) {
      setReferrer(savedRef);
    }
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);

    emailjs.sendForm('service_kre130q', 'template_c6bk6md', form.current, 'rwuMEi1EWS0jey8s2')
      .then((result) => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          if (form.current) form.current.reset();
      }, (error) => {
          setIsSubmitting(false);
          alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In <span className="text-sky-600">Touch</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss the latest in tech? I'm always open to new opportunities.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info (Light Theme) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white border border-slate-200 p-8 rounded-2xl h-full shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's Connect</h3>
              <p className="text-slate-600 mb-8">
                Whether you have a question about my projects, need a full-stack application built, or just want to say hi, feel free to drop a message.
              </p>

              <div className="space-y-4">
                <a href={`mailto:${siteInfo.email}`} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200">
                    <Mail className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">Email Me</h4>
                    <p className="text-slate-500 text-sm">{siteInfo.email}</p>
                  </div>
                </a>

                <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200">
                    <Instagram className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">Instagram</h4>
                    <p className="text-slate-500 text-sm">Check out our profile</p>
                  </div>
                </a>

                <a href={siteInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200">
                    <Linkedin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">LinkedIn</h4>
                    <p className="text-slate-500 text-sm">Connect professionally</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Light Theme) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center space-y-4 py-10"
              >
                <CheckCircle className="w-20 h-20 text-emerald-500 mb-4" />
                <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600 text-lg">Thank you for contacting me.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                <input type="hidden" name="title" value="New Portfolio Inquiry" />
                <input type="hidden" name="referrer" value={referrer} />

                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" id="name" name="name" required disabled={isSubmitting}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" id="email" name="email" required disabled={isSubmitting}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    id="message" name="message" rows={4} required disabled={isSubmitting}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-colors resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit" disabled={isSubmitting}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}