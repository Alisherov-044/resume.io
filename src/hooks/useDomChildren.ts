export function useDomChildren() {
  const getAllChildren = (target: any[], contents: any[] = []) => {
    if (target?.length !== 0) {
      for (let child of target) {
        for (let childIndex = 0; childIndex < child.length; childIndex++) {
          contents.push(child[childIndex]);
        }
      }
    }

    while (target?.length !== 0) {
      const newTargetChildren: any[] = [];

      for (let child of target) {
        if (child.length !== 0) {
          for (let childIndex = 0; childIndex < child.length; childIndex++) {
            if (child[childIndex]?.children?.length !== 0) {
              newTargetChildren.push(child[childIndex]?.children);

              for (
                let innerChildIndex = 0;
                innerChildIndex < child[childIndex]?.children.length;
                innerChildIndex++
              ) {
                contents.push(child[childIndex]?.children[innerChildIndex]);
              }
            }
          }
        }
      }

      target = newTargetChildren;
    }

    return { target, contents };
  };

  return { getAllChildren };
}
