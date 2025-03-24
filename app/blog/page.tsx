/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Clock,
  User,
  MessageSquare,
  Search,
  Tag,
} from "lucide-react";

import { blogPosts } from "@/data/blogPost";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === null || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  useEffect(() => {
    setIsPageLoaded(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [paginatedPosts]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-navy-900 text-white">
      <main className="pt-24 pb-16">
        {/* Hero section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-navy-800 to-navy-900">
          <div className="container-custom">
            <h1 className="heading-lg text-center mb-4 reveal">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl text-center max-w-2xl mx-auto mb-8 reveal delay-1">
              Insights, updates, and ideas from our team on AI agents,
              automation, and business transformation
            </p>

            {/* Search bar */}
            <div className="max-w-md mx-auto mt-8 reveal delay-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-navy-800/70 border border-navy-700 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-aqua-500/50 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category filters */}
        <section className="py-8 border-b border-navy-700">
          <div className="container-custom">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`flex items-center gap-1 py-1 px-3 rounded-full border transition-all ${
                    selectedCategory === category
                      ? "bg-aqua-500 text-navy-900 border-aqua-500"
                      : "bg-transparent text-white/70 border-navy-700 hover:border-aqua-500/50"
                  }`}
                >
                  <Tag className="h-3.5 w-3.5" />
                  <span>{category}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog post grid */}
        <section className="py-16">
          <div className="container-custom">
            {paginatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="bg-navy-800 border-navy-700 hover:border-aqua-500/50 transition-all hover:shadow-[0_0_15px_rgba(100,255,218,0.1)] overflow-hidden reveal"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-white transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-white/60">
                          <div className="flex items-center gap-1 text-sm">
                            <Calendar className="h-4 w-4 text-aqua-500" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-4 w-4 text-aqua-500" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <MessageSquare className="h-4 w-4 text-aqua-500" />
                            <span>{post.comments} comments</span>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-white/80">{post.excerpt}</div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-aqua-500" />
                        <span className="text-sm text-white/70">
                          {post.author}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-aqua-500 hover:text-aqua-400 text-sm font-medium"
                      >
                        Read more →
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-medium mb-4">No articles found</h3>
                <p className="text-white/70 mb-8">
                  Try changing your search criteria or explore different
                  categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                  className="btn-primary"
                >
                  Reset filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredPosts.length > POSTS_PER_PAGE && (
              <div className="mt-16">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          currentPage > 1 && handlePageChange(currentPage - 1)
                        }
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }).map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          isActive={currentPage === i + 1}
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          currentPage < totalPages &&
                          handlePageChange(currentPage + 1)
                        }
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Make sure this is a real component in your layout */}
      {/* <Footer /> */}
    </div>
  );
};

export default Blog;
