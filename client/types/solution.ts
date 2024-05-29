interface IAuthor {
  username: string;
  fullName: string;
  avatar: string;
  profileUrl: string;
}

interface IRepository {
  name: string;
  url: string;
}

interface ITechnology {
  name: string;
  icon: string;
}

export interface ISolution {
  id: string;
  projectName: string;
  about: string;
  image: string;
  ogImage: string;
  imageAlt: string;
  repositories: IRepository[];
  authors: IAuthor[];
  technologies: ITechnology[];
  keywords: string[];
}
