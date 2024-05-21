/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Course } from "./Course";
import { CourseCountArgs } from "./CourseCountArgs";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseFindUniqueArgs } from "./CourseFindUniqueArgs";
import { CreateCourseArgs } from "./CreateCourseArgs";
import { UpdateCourseArgs } from "./UpdateCourseArgs";
import { DeleteCourseArgs } from "./DeleteCourseArgs";
import { LessonFindManyArgs } from "../../lesson/base/LessonFindManyArgs";
import { Lesson } from "../../lesson/base/Lesson";
import { ProgressFindManyArgs } from "../../progress/base/ProgressFindManyArgs";
import { Progress } from "../../progress/base/Progress";
import { CourseService } from "../course.service";
@graphql.Resolver(() => Course)
export class CourseResolverBase {
  constructor(protected readonly service: CourseService) {}

  async _coursesMeta(
    @graphql.Args() args: CourseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Course])
  async courses(@graphql.Args() args: CourseFindManyArgs): Promise<Course[]> {
    return this.service.courses(args);
  }

  @graphql.Query(() => Course, { nullable: true })
  async course(
    @graphql.Args() args: CourseFindUniqueArgs
  ): Promise<Course | null> {
    const result = await this.service.course(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Course)
  async createCourse(@graphql.Args() args: CreateCourseArgs): Promise<Course> {
    return await this.service.createCourse({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Course)
  async updateCourse(
    @graphql.Args() args: UpdateCourseArgs
  ): Promise<Course | null> {
    try {
      return await this.service.updateCourse({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Course)
  async deleteCourse(
    @graphql.Args() args: DeleteCourseArgs
  ): Promise<Course | null> {
    try {
      return await this.service.deleteCourse(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Lesson], { name: "lessons" })
  async findLessons(
    @graphql.Parent() parent: Course,
    @graphql.Args() args: LessonFindManyArgs
  ): Promise<Lesson[]> {
    const results = await this.service.findLessons(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Progress], { name: "progresses" })
  async findProgresses(
    @graphql.Parent() parent: Course,
    @graphql.Args() args: ProgressFindManyArgs
  ): Promise<Progress[]> {
    const results = await this.service.findProgresses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
