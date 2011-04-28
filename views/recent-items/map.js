function(doc) {
  if (doc.utc) {
    emit(doc.utc, doc);
  }
};