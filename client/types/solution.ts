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
  repositories: IRepository[];
  authors: IAuthor[];
  technologies: ITechnology[];
}
