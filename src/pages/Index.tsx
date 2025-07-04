
import { useState } from "react";
import { Mail, Phone, MapPin, Code, Database, Globe, Smartphone, Shield, Users, ChevronRight, Star, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All form fields are required to submit your message.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting Hernoman. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg mr-3">
                <Code className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-gray-900">Hernoman</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left">Services</button>
              <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors w-full text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Build Smarter.
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Launch Faster.
                </span>
                With Hernoman.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We help businesses grow through innovative technology solutions. From stunning websites to powerful database systems, we turn your digital vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('services')} 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg group"
                >
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">Web Development</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <Database className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">Database Systems</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <Smartphone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">Mobile Apps</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">Secure Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Hernoman</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Hernoman, we believe technology should empower businesses, not complicate them. 
              Our mission is to deliver cutting-edge digital solutions that drive growth and efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-gray-600">Skilled developers and designers with years of experience in creating powerful digital solutions.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliable Solutions</h3>
                <p className="text-gray-600">We build robust, scalable systems that grow with your business and stand the test of time.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChevronRight className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround times without compromising quality, getting your project live faster.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we offer comprehensive digital solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Website Development</h3>
                <p className="text-gray-600 mb-4">Custom websites built with modern technologies, responsive design, and optimized performance.</p>
                <div className="text-blue-600 font-medium flex items-center">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Landing Pages</h3>
                <p className="text-gray-600 mb-4">High-converting landing pages designed to capture leads and drive business growth.</p>
                <div className="text-purple-600 font-medium flex items-center">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
                <p className="text-gray-600 mb-4">Powerful web applications with rich functionality and seamless user experiences.</p>
                <div className="text-green-600 font-medium flex items-center">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">DBMS for Institutions</h3>
                <p className="text-gray-600 mb-4">Custom database management systems for educational institutions and organizations.</p>
                <div className="text-orange-600 font-medium flex items-center">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-red-500 to-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Retail & Pharmacy Systems</h3>
                <p className="text-gray-600 mb-4">Specialized management systems for retail shops, pharmacies, and inventory control.</p>
                <div className="text-red-600 font-medium flex items-center">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Tech Solutions</h3>
                <p className="text-gray-600 mb-4">Tailored technology solutions designed specifically for your unique business requirements.</p>
                <div className="text-indigo-600 font-medium flex items-center">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied clients have to say about working with Hernoman.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Hernoman transformed our outdated website into a modern, user-friendly platform that increased our online sales by 200%. Their attention to detail is exceptional."
                </p>
                <div className="flex items-center">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">MS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria Santos</p>
                    <p className="text-sm text-gray-500">CEO, Santos Retail</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The custom database system they built for our pharmacy has streamlined our operations completely. We can now manage inventory and prescriptions effortlessly."
                </p>
                <div className="flex items-center">
                  <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">DR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Dr. Robert Kim</p>
                    <p className="text-sm text-gray-500">Owner, MediCare Plus</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Working with Hernoman was a game-changer for our institution. Their student management system has improved our administrative efficiency by 300%."
                </p>
                <div className="flex items-center">
                  <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jennifer Davis</p>
                    <p className="text-sm text-gray-500">Principal, Eastside Academy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Get in touch with us today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">hello@hernoman.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-gray-600">123 Tech Street, Innovation City</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                <h4 className="text-xl font-semibold mb-3">Why Choose Hernoman?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    5+ years of experience
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    100+ successful projects
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    24/7 support & maintenance
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Competitive pricing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg mr-3">
                  <Code className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold">Hernoman</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building smarter digital solutions for the future of business.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-blue-700 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-pink-600 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-blue-400 rounded"></div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Website Development</span></li>
                <li><span className="text-gray-400">Landing Pages</span></li>
                <li><span className="text-gray-400">Web Applications</span></li>
                <li><span className="text-gray-400">Database Systems</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <p className="text-gray-400">hello@hernoman.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">123 Tech Street<br />Innovation City</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Hernoman. All rights reserved. Built with passion for technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
