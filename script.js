// --- Tab Navigation Logic ---
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    // Deactivate active tabs
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    
    // Activate target tab
    btn.classList.add("active");
    const tabId = btn.dataset.tab;
    const pane = document.getElementById(`pane-${tabId}`);
    if (pane) pane.classList.add("active");
  });
});

// --- State Management ---
const state = {
  title: "Get a UPI with credit card",
  subtitle: "Fast and secure payments",
  titleFont: "Outfit",
  titleFontSize: 48,
  titleFontWeight: "800",
  titleColorMode: "solid",
  titleColor: "#111111",
  titleColorGrad1: "#ff007f",
  titleColorGrad2: "#7f00ff",
  subtitleFont: "Inter",
  subtitleFontSize: 20,
  subtitleFontWeight: "400",
  subtitleColor: "#444444",
  textPosition: "top", // top, bottom, hidden
  textAlign: "center", // center, left, right
  deviceFrame: "iphone15", // iphone15, android, outline, none
  deviceColor: "titanium", // titanium, dark, gold, custom
  deviceColorCustom: "#ff007f",
  deviceTiltX: 0,
  deviceTiltY: 0,
  deviceRotateZ: 0,
  deviceScale: 1.0,
  deviceOffsetY: 0,
  deviceGlare: true,
  deviceShadowBlur: 40,
  deviceShadowColor: "#000000",
  deviceShadowOpacity: 25,
  bgStyle: "gradient-presets", // gradient-presets, custom-gradient, solid
  bgPreset: "pink",
  bgColor1: "#6a11cb",
  bgColor2: "#2575fc",
  bgGradientType: "linear",
  bgGradientAngle: 135,
  bgColorSolid: "#dfe4ea",
  bgPattern: "none", // none, dot-grid, mesh-grid, subtle-noise
  bgBlobs: true,
  bgBlur: 20,
  zoom: 80 // percentage
};

// Preset Configurations
const presets = {
  "solar-flare": {
    bgStyle: "gradient-presets",
    bgPreset: "sunrise",
    titleFont: "Syne",
    titleFontSize: 52,
    titleColorMode: "solid",
    titleColor: "#ffffff",
    subtitleColor: "#ffeffa",
    deviceFrame: "iphone15",
    deviceColor: "titanium",
    deviceTiltX: 8,
    deviceTiltY: -12,
    deviceRotateZ: -3,
    deviceScale: 1.05,
    deviceOffsetY: 20,
    bgPattern: "none",
    bgBlobs: true,
    bgBlur: 30,
    textPosition: "top",
    textAlign: "center",
    deviceGlare: true,
    deviceShadowBlur: 45,
    deviceShadowColor: "#000000",
    deviceShadowOpacity: 35
  },
  "cyberpunk-glow": {
    bgStyle: "custom-gradient",
    bgColor1: "#0a0a0c",
    bgColor2: "#1e0b36",
    bgGradientType: "linear",
    bgGradientAngle: 180,
    titleFont: "Space Grotesk",
    titleFontSize: 48,
    titleColorMode: "gradient",
    titleColorGrad1: "#00f0ff",
    titleColorGrad2: "#ff007f",
    subtitleColor: "#00f0ff",
    deviceFrame: "iphone15",
    deviceColor: "custom",
    deviceColorCustom: "#ff007f",
    deviceTiltX: 12,
    deviceTiltY: 15,
    deviceRotateZ: 5,
    deviceScale: 0.95,
    deviceOffsetY: 10,
    bgPattern: "mesh-grid",
    bgBlobs: true,
    bgBlur: 10,
    textPosition: "top",
    textAlign: "center",
    deviceGlare: true,
    deviceShadowBlur: 55,
    deviceShadowColor: "#ff007f",
    deviceShadowOpacity: 30
  },
  "dark-tech": {
    bgStyle: "gradient-presets",
    bgPreset: "neon",
    titleFont: "Space Grotesk",
    titleFontSize: 46,
    titleColorMode: "solid",
    titleColor: "#ffffff",
    subtitleColor: "#94a3b8",
    deviceFrame: "android",
    deviceColor: "dark",
    deviceTiltX: 10,
    deviceTiltY: -10,
    deviceRotateZ: -2,
    deviceScale: 1.0,
    deviceOffsetY: 30,
    bgPattern: "dot-grid",
    bgBlobs: false,
    bgBlur: 20,
    textPosition: "top",
    textAlign: "left",
    deviceGlare: true,
    deviceShadowBlur: 40,
    deviceShadowColor: "#000000",
    deviceShadowOpacity: 40
  },
  "minimal-glass": {
    bgStyle: "gradient-presets",
    bgPreset: "glass",
    titleFont: "Playfair Display",
    titleFontSize: 50,
    titleColorMode: "solid",
    titleColor: "#1e293b",
    subtitleColor: "#475569",
    deviceFrame: "outline",
    deviceColor: "titanium",
    deviceTiltX: 0,
    deviceTiltY: 0,
    deviceRotateZ: 0,
    deviceScale: 0.95,
    deviceOffsetY: 0,
    bgPattern: "none",
    bgBlobs: true,
    bgBlur: 40,
    textPosition: "top",
    textAlign: "center",
    deviceGlare: false,
    deviceShadowBlur: 20,
    deviceShadowColor: "#000000",
    deviceShadowOpacity: 10
  },
  "aurora-pastel": {
    bgStyle: "gradient-presets",
    bgPreset: "abstract",
    titleFont: "Outfit",
    titleFontSize: 52,
    titleColorMode: "gradient",
    titleColorGrad1: "#8b5cf6",
    titleColorGrad2: "#ec4899",
    subtitleColor: "#4c1d95",
    deviceFrame: "none",
    deviceTiltX: -10,
    deviceTiltY: 10,
    deviceRotateZ: 4,
    deviceScale: 1.05,
    deviceOffsetY: 20,
    bgPattern: "none",
    bgBlobs: true,
    bgBlur: 25,
    textPosition: "top",
    textAlign: "center",
    deviceGlare: true,
    deviceShadowBlur: 35,
    deviceShadowColor: "#000000",
    deviceShadowOpacity: 15
  },
  "forest-clean": {
    bgStyle: "gradient-presets",
    bgPreset: "forest",
    titleFont: "Outfit",
    titleFontSize: 46,
    titleColorMode: "solid",
    titleColor: "#ffffff",
    subtitleColor: "#dcfce7",
    deviceFrame: "iphone15",
    deviceColor: "titanium",
    deviceTiltX: 5,
    deviceTiltY: -5,
    deviceRotateZ: 0,
    deviceScale: 1.0,
    deviceOffsetY: 10,
    bgPattern: "none",
    bgBlobs: true,
    bgBlur: 15,
    textPosition: "top",
    textAlign: "center",
    deviceGlare: true,
    deviceShadowBlur: 40,
    deviceShadowColor: "#000000",
    deviceShadowOpacity: 25
  },
  "sunset-vibes": {
    bgStyle: "gradient-presets",
    bgPreset: "sunset",
    titleFont: "Syne",
    titleFontSize: 48,
    titleColorMode: "solid",
    titleColor: "#0f172a",
    subtitleColor: "#334155",
    deviceFrame: "outline",
    deviceColor: "custom",
    deviceColorCustom: "#334155",
    deviceTiltX: 0,
    deviceTiltY: 0,
    deviceRotateZ: -8,
    deviceScale: 1.0,
    deviceOffsetY: 30,
    bgPattern: "none",
    bgBlobs: true,
    bgBlur: 20,
    textPosition: "top",
    textAlign: "center",
    deviceGlare: true,
    deviceShadowBlur: 30,
    deviceShadowColor: "#000000",
    deviceShadowOpacity: 15
  },
  "neon-purple": {
    bgStyle: "custom-gradient",
    bgColor1: "#120024",
    bgColor2: "#4a0082",
    bgGradientType: "radial",
    titleFont: "Space Grotesk",
    titleFontSize: 50,
    titleColorMode: "gradient",
    titleColorGrad1: "#ffffff",
    titleColorGrad2: "#da70d6",
    subtitleColor: "#da70d6",
    deviceFrame: "iphone15",
    deviceColor: "dark",
    deviceTiltX: 15,
    deviceTiltY: 0,
    deviceRotateZ: 0,
    deviceScale: 1.0,
    deviceOffsetY: 10,
    bgPattern: "mesh-grid",
    bgBlobs: true,
    bgBlur: 30,
    textPosition: "top",
    textAlign: "center",
    deviceGlare: true,
    deviceShadowBlur: 50,
    deviceShadowColor: "#a855f7",
    deviceShadowOpacity: 30
  }
};

// --- Inputs Registration Configuration ---
const inputs = [
  { id: "titleInput", prop: "title", event: "input" },
  { id: "subtitleInput", prop: "subtitle", event: "input" },
  
  { id: "deviceFrame", prop: "deviceFrame", event: "change" },
  { id: "deviceColor", prop: "deviceColor", event: "change" },
  { id: "deviceColorCustom", prop: "deviceColorCustom", event: "input" },
  
  { id: "deviceTiltX", prop: "deviceTiltX", event: "input", isNum: true, suffix: "°" },
  { id: "deviceTiltY", prop: "deviceTiltY", event: "input", isNum: true, suffix: "°" },
  { id: "deviceRotateZ", prop: "deviceRotateZ", event: "input", isNum: true, suffix: "°" },
  { id: "deviceScale", prop: "deviceScale", event: "input", isNum: true, suffix: "" },
  { id: "deviceOffsetY", prop: "deviceOffsetY", event: "input", isNum: true, suffix: "px" },
  
  { id: "deviceGlare", prop: "deviceGlare", event: "change", isBool: true },
  { id: "deviceShadowBlur", prop: "deviceShadowBlur", event: "input", isNum: true, suffix: "px" },
  { id: "deviceShadowColor", prop: "deviceShadowColor", event: "input" },
  { id: "deviceShadowOpacity", prop: "deviceShadowOpacity", event: "input", isNum: true, suffix: "%" },
  
  { id: "bgStyle", prop: "bgStyle", event: "change" },
  { id: "bgPreset", prop: "bgPreset", event: "change" },
  { id: "bgColor1", prop: "bgColor1", event: "input" },
  { id: "bgColor2", prop: "bgColor2", event: "input" },
  { id: "bgGradientType", prop: "bgGradientType", event: "change" },
  { id: "bgGradientAngle", prop: "bgGradientAngle", event: "input", isNum: true, suffix: "°" },
  { id: "bgColorSolid", prop: "bgColorSolid", event: "input" },
  
  { id: "bgPattern", prop: "bgPattern", event: "change" },
  { id: "bgBlobs", prop: "bgBlobs", event: "change", isBool: true },
  { id: "bgBlur", prop: "bgBlur", event: "input", isNum: true, suffix: "px" },
  
  { id: "textPosition", prop: "textPosition", event: "change" },
  { id: "textAlign", prop: "textAlign", event: "change" },
  
  { id: "titleFont", prop: "titleFont", event: "change" },
  { id: "titleFontSize", prop: "titleFontSize", event: "input", isNum: true, suffix: "px" },
  { id: "titleFontWeight", prop: "titleFontWeight", event: "change" },
  { id: "titleColorMode", prop: "titleColorMode", event: "change" },
  { id: "titleColor", prop: "titleColor", event: "input" },
  { id: "titleColorGrad1", prop: "titleColorGrad1", event: "input" },
  { id: "titleColorGrad2", prop: "titleColorGrad2", event: "input" },
  
  { id: "subtitleFont", prop: "subtitleFont", event: "change" },
  { id: "subtitleFontSize", prop: "subtitleFontSize", event: "input", isNum: true, suffix: "px" },
  { id: "subtitleFontWeight", prop: "subtitleFontWeight", event: "change" },
  { id: "subtitleColor", prop: "subtitleColor", event: "input" }
];

// --- Utilities ---
function hexToRgb(hex) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  if (isNaN(bigint)) return "0, 0, 0";
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

// Adjust custom frame side lighting
function adjustColorBrightness(hex, percent) {
  let R = parseInt(hex.substring(1, 3), 16);
  let G = parseInt(hex.substring(3, 5), 16);
  let B = parseInt(hex.substring(5, 7), 16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R < 255) ? R : 255;
  G = (G < 255) ? G : 255;
  B = (B < 255) ? B : 255;

  R = R.toString(16).padStart(2, '0');
  G = G.toString(16).padStart(2, '0');
  B = B.toString(16).padStart(2, '0');

  return `#${R}${G}${B}`;
}

function updateSliderValLabel(id, value, suffix = "") {
  const valLabel = document.getElementById(`val-${id}`);
  if (valLabel) {
    valLabel.innerText = `${value}${suffix}`;
  }
}

// Update conditional inputs visibility
function updateInputsVisibility() {
  // 1. Background Settings Panel
  const presetsSub = document.getElementById("bg-sub-presets");
  const customSub = document.getElementById("bg-sub-custom");
  const solidSub = document.getElementById("bg-sub-solid");
  
  if (state.bgStyle === "gradient-presets") {
    presetsSub.style.display = "block";
    customSub.style.display = "none";
    solidSub.style.display = "none";
  } else if (state.bgStyle === "custom-gradient") {
    presetsSub.style.display = "none";
    customSub.style.display = "block";
    solidSub.style.display = "none";
    
    const angleContainer = document.getElementById("bgGradientAngleContainer");
    angleContainer.style.display = state.bgGradientType === "linear" ? "block" : "none";
  } else if (state.bgStyle === "solid") {
    presetsSub.style.display = "none";
    customSub.style.display = "none";
    solidSub.style.display = "block";
  }
  
  // 2. Custom Device Frame Color Picker
  const customDeviceColor = document.getElementById("deviceColorCustomContainer");
  customDeviceColor.style.display = state.deviceColor === "custom" ? "block" : "none";
  
  // 3. Title Color Mode Custom Colors
  const titleSolid = document.getElementById("title-color-solid-container");
  const titleGrad = document.getElementById("title-color-grad-container");
  
  if (state.titleColorMode === "gradient") {
    titleSolid.style.display = "none";
    titleGrad.style.display = "block";
  } else {
    titleSolid.style.display = "block";
    titleGrad.style.display = "none";
  }

  // 4. Blobs blur slider container
  const blurContainer = document.getElementById("bgBlurContainer");
  blurContainer.style.display = state.bgBlobs ? "block" : "none";
}

// --- Apply State to Canvas Preview ---
function applyState() {
  updateInputsVisibility();

  // 1. Text Component Values
  const previewTitle = document.getElementById("previewTitle");
  const previewSubtitle = document.getElementById("previewSubtitle");
  const textGroup = document.getElementById("textGroup");

  previewTitle.innerText = state.title;
  previewSubtitle.innerText = state.subtitle;

  // 2. Text layout & positioning
  const canvasInnerContent = document.getElementById("canvasInnerContent");
  if (state.textPosition === "top") {
    textGroup.style.display = "flex";
    textGroup.style.order = "1";
    document.getElementById("deviceWrapper").style.order = "2";
    textGroup.style.marginTop = "0";
    textGroup.style.marginBottom = "auto";
  } else if (state.textPosition === "bottom") {
    textGroup.style.display = "flex";
    textGroup.style.order = "2";
    document.getElementById("deviceWrapper").style.order = "1";
    textGroup.style.marginTop = "auto";
    textGroup.style.marginBottom = "0";
  } else {
    // Hidden
    textGroup.style.display = "none";
  }

  // Horizontal Alignment
  textGroup.className = "text-component-group"; // clear classes
  textGroup.classList.add(`align-${state.textAlign}`);

  // 3. Typography details
  // Title
  previewTitle.style.fontFamily = `'${state.titleFont}', sans-serif`;
  previewTitle.style.fontSize = `${state.titleFontSize}px`;
  previewTitle.style.fontWeight = state.titleFontWeight;
  
  if (state.titleColorMode === "gradient") {
    previewTitle.classList.add("gradient-text");
    previewTitle.style.setProperty("--text-gradient", `linear-gradient(to right, ${state.titleColorGrad1}, ${state.titleColorGrad2})`);
    previewTitle.style.color = "transparent";
  } else {
    previewTitle.classList.remove("gradient-text");
    previewTitle.style.removeProperty("--text-gradient");
    previewTitle.style.color = state.titleColor;
  }

  // Subtitle
  previewSubtitle.style.fontFamily = `'${state.subtitleFont}', sans-serif`;
  previewSubtitle.style.fontSize = `${state.subtitleFontSize}px`;
  previewSubtitle.style.fontWeight = state.subtitleFontWeight;
  previewSubtitle.style.color = state.subtitleColor;

  // 4. Background styling
  const canvas = document.getElementById("canvas");
  
  // Clear all preset background classes
  canvas.className = ""; 
  canvas.style.background = ""; // clear inline overrides

  if (state.bgStyle === "gradient-presets") {
    canvas.classList.add(`bg-${state.bgPreset}-mode`);
  } else if (state.bgStyle === "custom-gradient") {
    if (state.bgGradientType === "linear") {
      canvas.style.background = `linear-gradient(${state.bgGradientAngle}deg, ${state.bgColor1} 0%, ${state.bgColor2} 100%)`;
    } else {
      canvas.style.background = `radial-gradient(circle, ${state.bgColor1} 0%, ${state.bgColor2} 100%)`;
    }
  } else if (state.bgStyle === "solid") {
    canvas.style.background = state.bgColorSolid;
  }

  // Background Pattern overlays
  const canvasPattern = document.getElementById("canvasPattern");
  canvasPattern.className = "canvas-pattern"; // Reset
  if (state.bgPattern !== "none") {
    canvasPattern.classList.add(`pattern-${state.bgPattern}`);
  }

  // Decorative blobs
  const bgGraphics = document.getElementById("bgGraphics");
  if (state.bgBlobs) {
    bgGraphics.style.display = "block";
    bgGraphics.innerHTML = `
      <div class="floating-blob blob-1" style="--blob-blur: ${state.bgBlur}px"></div>
      <div class="floating-blob blob-2" style="--blob-blur: ${state.bgBlur}px"></div>
      <div class="floating-blob blob-3" style="--blob-blur: ${state.bgBlur}px"></div>
    `;
  } else {
    bgGraphics.style.display = "none";
    bgGraphics.innerHTML = "";
  }

  // 5. Device Setup (Phone frame & shadow & skew)
  const phone = document.getElementById("phoneContainer");
  const camera = document.getElementById("phoneCamera");
  
  // Clear frame types
  phone.className = "phone"; 
  phone.classList.add(`frame-${state.deviceFrame}`);

  // Frame colors
  // Clear existing frame color classes
  phone.classList.remove("color-titanium", "color-dark", "color-gold", "color-custom-style");
  phone.style.removeProperty("--custom-frame-color");
  phone.style.removeProperty("--custom-frame-color-light");

  if (state.deviceColor === "custom") {
    phone.classList.add("color-custom-style");
    phone.style.setProperty("--custom-frame-color", state.deviceColorCustom);
    phone.style.setProperty("--custom-frame-color-light", adjustColorBrightness(state.deviceColorCustom, 40));
  } else {
    phone.classList.add(`color-${state.deviceColor}`);
  }

  // Screen glare toggle
  const screenGlare = document.getElementById("screenGlare");
  screenGlare.style.opacity = state.deviceGlare ? 1 : 0;

  // Phone shadow properties
  const shadowRgb = hexToRgb(state.deviceShadowColor);
  const shadowAlpha = state.deviceShadowOpacity / 100;
  // Dynamic offset shadow that shifts slightly when tilting
  const shadowOffsetY = (state.deviceOffsetY / 3) + 20; 
  phone.style.boxShadow = `0 ${shadowOffsetY}px ${state.deviceShadowBlur}px rgba(${shadowRgb}, ${shadowAlpha})`;

  // Apply 3D tilt styles via custom props
  phone.style.setProperty("--rot-x", `${state.deviceTiltX}deg`);
  phone.style.setProperty("--rot-y", `${state.deviceTiltY}deg`);
  phone.style.setProperty("--rot-z", `${state.deviceRotateZ}deg`);
  phone.style.setProperty("--dev-scale", state.deviceScale);
  phone.style.setProperty("--dev-offset-y", `${state.deviceOffsetY}px`);

  // 6. Zoom Scale update
  const canvasScaleWrapper = document.getElementById("canvasScaleWrapper");
  canvasScaleWrapper.style.transform = `scale(${state.zoom / 100})`;
  document.getElementById("zoomVal").innerText = `${state.zoom}%`;
}

// --- Bind Inputs ---
inputs.forEach(inp => {
  const el = document.getElementById(inp.id);
  if (!el) return;

  el.addEventListener(inp.event, e => {
    let value;
    if (inp.isBool) {
      value = e.target.checked;
    } else if (inp.isNum) {
      value = parseFloat(e.target.value);
    } else {
      value = e.target.value;
    }

    state[inp.prop] = value;
    
    // Update label badge if numeric range
    if (inp.isNum) {
      updateSliderValLabel(inp.id, value, inp.suffix || "");
    }
    
    // Clear active preset state if background/transforms changed manually
    if (inp.prop.startsWith("bg") || inp.prop.startsWith("device") || inp.prop.startsWith("title") || inp.prop.startsWith("subtitle")) {
      document.querySelectorAll(".preset-card").forEach(c => c.classList.remove("active"));
    }

    applyState();
  });
});

// --- Preset Buttons Bindings ---
document.querySelectorAll(".preset-card").forEach(card => {
  card.addEventListener("click", () => {
    const presetName = card.dataset.preset;
    loadPreset(presetName);
  });
});

function loadPreset(presetName) {
  const preset = presets[presetName];
  if (!preset) return;

  // Merge preset details into state
  for (const key in preset) {
    state[key] = preset[key];
  }

  // Update UI DOM controls to reflect preset values
  inputs.forEach(inp => {
    const el = document.getElementById(inp.id);
    if (!el) return;

    if (inp.isBool) {
      el.checked = state[inp.prop];
    } else {
      el.value = state[inp.prop];
    }

    if (inp.isNum) {
      updateSliderValLabel(inp.id, state[inp.prop], inp.suffix || "");
    }
  });

  // Active state on card elements
  document.querySelectorAll(".preset-card").forEach(c => {
    if (c.dataset.preset === presetName) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });

  applyState();
}

// --- Zoom Controls Handlers ---
document.getElementById("zoomInBtn").addEventListener("click", () => {
  state.zoom = Math.min(150, state.zoom + 10);
  applyState();
});

document.getElementById("zoomOutBtn").addEventListener("click", () => {
  state.zoom = Math.max(30, state.zoom - 10);
  applyState();
});

document.getElementById("zoomResetBtn").addEventListener("click", () => {
  autoFitCanvas();
});

// --- Screenshots & Background Image Uploaders ---
document.getElementById("imageUpload").addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = ev => {
    document.getElementById("previewImage").src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

document.getElementById("bgUpload").addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = ev => {
    const customBg = document.getElementById("customBg");
    customBg.src = ev.target.result;
    customBg.style.opacity = 1;
    
    // Switch background style to custom gradient to show background graphic overlay
    state.bgStyle = "custom-gradient";
    document.getElementById("bgStyle").value = "custom-gradient";
    applyState();
  };
  reader.readAsDataURL(file);
});

// --- Render / Download PNG Execution ---
function downloadImage() {
  const canvasElement = document.getElementById("canvas");
  const downloadButton = document.querySelector(".btn-primary");
  const originalText = downloadButton.innerHTML;
  
  downloadButton.innerHTML = `<span class="btn-icon">⏳</span> Exporting...`;
  downloadButton.disabled = true;

  // Zoom wrapper transform needs to be neutralised temporarily so browser captures it at exactly 1x scale 
  // before rendering high quality
  const oldZoom = state.zoom;
  state.zoom = 100;
  applyState();

  // html2canvas Grab
  html2canvas(canvasElement, {
    scale: 3, // Premium 3x export resolution
    useCORS: true,
    allowTaint: true,
    backgroundColor: null, // Transparent frame corners
    logging: false
  })
  .then(canvas => {
    const link = document.createElement("a");
    link.download = `screenshot-pro-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    
    // Restore state and buttons
    state.zoom = oldZoom;
    applyState();
    
    downloadButton.innerHTML = originalText;
    downloadButton.disabled = false;
  })
  .catch(err => {
    console.error("Screenshot rendering failed:", err);
    alert("Export failed. Please check files and try again.");
    state.zoom = oldZoom;
    applyState();
    
    downloadButton.innerHTML = originalText;
    downloadButton.disabled = false;
  });
}

// --- Auto-fit Canvas to Viewport ---
function autoFitCanvas() {
  const viewport = document.querySelector(".canvas-viewport");
  if (!viewport) return;

  const padding = 24;
  const vWidth = viewport.clientWidth - padding;
  const vHeight = viewport.clientHeight - padding;

  if (vWidth <= 0 || vHeight <= 0) return;

  const cWidth = 540;
  const cHeight = 960;

  const scaleX = vWidth / cWidth;
  const scaleY = vHeight / cHeight;

  let scale = Math.min(scaleX, scaleY);
  
  // Bound scale between 20% and 150%
  scale = Math.max(0.2, Math.min(1.5, scale));

  state.zoom = Math.round(scale * 100);
  
  const canvasScaleWrapper = document.getElementById("canvasScaleWrapper");
  if (canvasScaleWrapper) {
    canvasScaleWrapper.style.transform = `scale(${state.zoom / 100})`;
  }
  const zoomVal = document.getElementById("zoomVal");
  if (zoomVal) {
    zoomVal.innerText = `${state.zoom}%`;
  }
}

// Bind resize listener
window.addEventListener("resize", autoFitCanvas);

// --- Initial Launch Setup ---
// Load default "Solar Flare" template
loadPreset("solar-flare");

// Run auto-fit after loading initial preset
setTimeout(autoFitCanvas, 100);