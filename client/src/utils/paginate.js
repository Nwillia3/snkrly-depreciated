import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // calcuate starting index of page this
  const startIndex = (pageNumber - 1) * pageSize;

  // to use a chain must use a lodash wrapper
  return _(items)
    .slice(startIndex) // slice array starting from startIndex
    .take(pageSize)
    .value();
}
