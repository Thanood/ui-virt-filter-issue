export class SelectedValueConverter {
  toView(array, selectedProperty, isActive) {
    if (array) {
      if (isActive) {
        return array.filter(item => {
          return !!item[selectedProperty];
        });
      } else {
        return array;
      }
    }
  }
}
