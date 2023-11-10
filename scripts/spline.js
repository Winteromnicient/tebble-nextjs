class SplineViewer extends HTMLElement {
    constructor() {
      super();      
      <spline-viewer url="https://prod.spline.design/jaPO-yUPwBfzXkEP/scene.splinecode"></spline-viewer>
    }
  
    // Add a method to remove the logo
    removeLogo() {
      const shadow = this.shadowRoot;
      const logoElement = shadow.querySelector('#logo');
      if (logoElement) {
        logoElement.remove();
      }
    }
  }
  
  // Register your custom element
  customElements.define('spline-viewer', SplineViewer);
  