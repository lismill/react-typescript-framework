/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-25 14:41:03
 * @LastEditTime: 2022-03-08 20:42:18
 * @FilePath: \create-react-app-typescript\src\views\App\config\breadcrumb.ts
 */
export default function AppConfigBreadcrumb(pathnames: any, routes: any) {
  let result: any = [];
  const _pathnames: any = pathnames.filter((item: any) => item);
  switch (_pathnames.length) {
    case 2: {
      const first: any = routes.find((router: any) => router.path === `/${_pathnames[0]}`);
      const second: any = first?.children.find((router: any) => router.path === `/${_pathnames[1]}`);
      result.push(
        {
          path: `/${_pathnames[0]}`,
          title: first?.meta.title,
          redirect: first?.redirect ?? "",
        },
        {
          path: `/${_pathnames[0]}/${_pathnames[1]}`,
          title: second?.meta.title,
        }
      );
      break;
    }
    case 3: {
      const first: any = routes.find((router: any) => router.path === `/${_pathnames[0]}`);
      const second: any = first?.children.find((router: any) => router.path === `/${_pathnames[1]}`);
      const three: any = second?.children.find((router: any) => router.path === `/${_pathnames[2]}`);
      result.push(
        {
          path: `/${_pathnames[0]}`,
          title: first?.meta.title,
          redirect: first?.redirect ?? "",
        },
        {
          path: `/${_pathnames[0]}/${_pathnames[1]}`,
          title: second?.meta.title,
          redirect: second?.redirect ?? "",
        },
        {
          path: `/${_pathnames[0]}/${_pathnames[1]}/${_pathnames[2]}`,
          title: three?.meta.title,
        }
      );
      break;
    }
    default: {
      const first: any = routes.find((router: any) => router.path === `/${_pathnames[0]}`);
      result.push({
        path: _pathnames[0] ? `/${_pathnames[0]}` : "/",
        title: first && first.meta ? first.meta.title : "",
      });
      break;
    }
  }
  return result;
}
