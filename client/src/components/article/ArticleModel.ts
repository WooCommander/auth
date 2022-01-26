export default class ArticleModel {
  Id!: string;
  Title!: string;
  DateCreate!: Date;
  Text!: string;
  CategoryId!: string;

  constructor(obj: Partial<ArticleModel>) {
    Object.assign(obj, this);
  }
}
