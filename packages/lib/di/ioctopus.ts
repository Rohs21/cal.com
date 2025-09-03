import type { Container, Module } from "@evyweb/ioctopus";

/**
 * A type-safe alternative to module.bind(token).toClass(classs, deps) that automatically ensures that all dependencies required by the Class are provided.
 * It assumes that dependencies are stored under the `deps` property of the Class, which is a good convention to follow anyway
 *
 * @returns A function that can be used to load the dependencies into the container automatically.
 */
export function bindModuleToClassOnToken<TClass extends new (...args: any[]) => any>({
  module,
  token,
  classs,
  depsMap,
}: {
  module: Module;
  token: string | symbol;
  classs: TClass;
  depsMap: Record<
    keyof InstanceType<TClass>["deps"],
    { token: string | symbol; moduleToken: string | symbol; module: Module }
  >;
}) {
  const depsObject = Object.fromEntries(Object.entries(depsMap).map(([key, value]) => [key, value.token]));
  module.bind(token).toClass(classs, depsObject);

  return function loadDeps(container: Container) {
    for (const key in depsMap) {
      const depToken = depsMap[key as keyof typeof depsMap].moduleToken;
      const depModule = depsMap[key as keyof typeof depsMap].module;
      container.load(depToken, depModule);
    }
  };
}
