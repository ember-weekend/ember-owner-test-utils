export function register(testContext, fullName, Factory) {
  if (testContext.register) {
    return testContext.register(fullName, Factory);
  }

  var legacyRegistry = testContext.application.__deprecatedInstance__.registry;
  if (legacyRegistry) {
    legacyRegistry.resolver = function noOpResolverBugFix() {};
  }

  let instance = testContext.application.__deprecatedInstance__;
  let registry = instance.register ? instance : instance.registry;

  return registry.register(fullName, Factory);
}
