export function lookup(testContext, fullName) {
  if (testContext.lookup) {
    return testContext.lookup(fullName);
  }

  var legacyRegistry = testContext.application.__deprecatedInstance__.registry;

  if (legacyRegistry) {
    legacyRegistry.resolver = function noOpResolverBugFix() {};
  }

  let instance = testContext.application.__deprecatedInstance__;
  let registry = instance.register ? instance : instance.registry;

  return registry.lookup(fullName);
}
