export const mockData = {
  authors: [
    {
      id: 1,
      name: "Charles",
      surname: "Dickens",
    },
    {
      id: 2,
      name: "Stephen",
      surname: "King",
    },
    {
      id: 3,
      name: "William",
      surname: "Shakespeare",
    },
    {
      id: 4,
      name: "Haruki",
      surname: "Murakami",
    },
  ],
  books: [
    {
      id: 1,
      author_id: 1,
      title: "Oliver Twist",
      cover_image: "",
      pages: 234,
      releaseDate: "1839",
      isbn: "wt345",
    },
    {
      id: 2,
      author_id: 1,
      title: "Hard Times",
      cover_image: "",
      pages: 300,
      releaseDate: "1854",
      isbn: "jk654",
    },
    {
      id: 3,
      author_id: 3,
      title: "Hamlet",
      cover_image: "",
      pages: 160,
      releaseDate: "1603",
      isbn: "po789",
    },
    {
      id: 4,
      author_id: 2,
      title: "IT",
      cover_image: "",
      pages: 500,
      releaseDate: "2017",
      isbn: "yu098",
    },
    {
      id: 5,
      author_id: 4,
      title: "Norwegian Wood",
      cover_image:
        "http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec",
      pages: 296,
      releaseDate: "1987",
      isbn: "hj846",
    },
    {
      id: 6,
      author_id: 4,
      title: "Kafka on the Shore",
      cover_image:
        "http://t0.gstatic.com/images?q=tbn:ANd9GcRHFU_j93PPsbQGqoaZJnHH6-Emk_sIxG823SkoRTL0nvdEP41f",
      pages: 505,
      releaseDate: "2002",
      isbn: "op012",
    },
    {
      id: 7,
      author_id: 4,
      title: "After Dark",
      cover_image:
        "http://t3.gstatic.com/images?q=tbn:ANd9GcQBMNA8A19vQpNY4bkgadsLhiRUFqBKwKAA6ANrw8VEtOiPrYQJ",
      pages: 208,
      releaseDate: "2004",
      isbn: "cv456",
    },
    {
      id: 8,
      author_id: 4,
      title: "1Q84",
      cover_image:
        "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
      pages: 928,
      releaseDate: "2009",
      isbn: "al207",
    },
  ],
  chapters: [
    {
      id: 1,
      book_id: 1,
      title: "chapter 1",
      content: "Lorem ipsum",
    },
    {
      id: 2,
      book_id: 2,
      title: "chapter 1",
      content: "Lorem ipsum",
    },
    {
      id: 3,
      book_id: 1,
      title: "chapter 2",
      content: "Lorem ipsum",
    },
  ],
};
