function DetectReportType(path) {
  if (path.includes("plb")) {
    return "PLB";
  } else if (path.includes("ppftz")) {
    return "PPFTZ";
  }
}

export default DetectReportType;
