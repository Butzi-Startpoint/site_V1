'use client'

import { useEffect, useRef } from 'react'

/* ─── Vertex shader (shared) ─────────────────────────────────────────────── */
const vsSource = `
  attribute vec4 aVertexPosition;
  void main() { gl_Position = aVertexPosition; }
`

/* ─── Full-screen dark shader (hero / dark sections) ─────────────────────── */
const fsFull = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;

  const float overallSpeed    = 0.2;
  const float gridSmoothWidth = 0.015;
  const float scale           = 5.0;
  const vec4  lineColor       = vec4(0.4, 0.2, 0.8, 1.0);
  const float minLineWidth    = 0.01;
  const float maxLineWidth    = 0.2;
  const float lineSpeed       = 1.0  * overallSpeed;
  const float lineAmplitude   = 1.0;
  const float lineFrequency   = 0.2;
  const float warpSpeed       = 0.2  * overallSpeed;
  const float warpFrequency   = 0.5;
  const float warpAmplitude   = 1.0;
  const float offsetFrequency = 0.5;
  const float offsetSpeed     = 1.33 * overallSpeed;
  const float minOffsetSpread = 0.6;
  const float maxOffsetSpread = 2.0;
  const int   linesPerGroup   = 16;

  #define drawCircle(pos,r,c)    smoothstep(r+gridSmoothWidth,r,length(c-(pos)))
  #define drawSmoothLine(p,w,t)  smoothstep(w,0.0,abs(p-(t)))
  #define drawCrispLine(p,w,t)   smoothstep(w+gridSmoothWidth,w,abs(p-(t)))

  float random(float t) {
    return (cos(t) + cos(t*1.3+1.3) + cos(t*1.4+1.4)) / 3.0;
  }
  float getPlasmaY(float x, float hFade, float offset) {
    return random(x*lineFrequency + iTime*lineSpeed) * hFade * lineAmplitude + offset;
  }

  void main() {
    vec2 uv    = gl_FragCoord.xy / iResolution.xy;
    vec2 space = (gl_FragCoord.xy - iResolution.xy*0.5) / iResolution.x * 2.0 * scale;
    float hFade = 1.0-(cos(uv.x*6.28)*0.5+0.5);
    float vFade = 1.0-(cos(uv.y*6.28)*0.5+0.5);
    space.y += random(space.x*warpFrequency + iTime*warpSpeed)        * warpAmplitude * (0.5+hFade);
    space.x += random(space.y*warpFrequency + iTime*warpSpeed + 2.0)  * warpAmplitude * hFade;

    vec4 lines = vec4(0.0);
    for (int l = 0; l < linesPerGroup; l++) {
      float nli  = float(l) / float(linesPerGroup);
      float oPos = float(l) + space.x * offsetFrequency;
      float oTime= iTime * offsetSpeed;
      float rand = random(oPos + oTime) * 0.5 + 0.5;
      float hw   = mix(minLineWidth, maxLineWidth, rand*hFade) * 0.5;
      float off  = random(oPos + oTime*(1.0+nli)) * mix(minOffsetSpread, maxOffsetSpread, hFade);
      float lp   = getPlasmaY(space.x, hFade, off);
      float line = drawSmoothLine(lp, hw, space.y)*0.5 + drawCrispLine(lp, hw*0.15, space.y);
      float cx   = mod(float(l) + iTime*lineSpeed, 25.0) - 12.0;
      vec2  cp   = vec2(cx, getPlasmaY(cx, hFade, off));
      line += drawCircle(cp, 0.01, space) * 4.0;
      lines += line * lineColor * rand;
    }
    vec4 bg = mix(vec4(0.1,0.1,0.3,1.0), vec4(0.3,0.1,0.5,1.0), uv.x);
    gl_FragColor = (bg * vFade + lines);
    gl_FragColor.a = 1.0;
  }
`

/* ─── Lines-only shader (light sections — transparent bg + purple lines) ─── */
const fsLines = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;

  const float overallSpeed    = 0.2;
  const float gridSmoothWidth = 0.015;
  const float scale           = 5.0;
  const vec4  lineColor       = vec4(0.55, 0.35, 1.0, 1.0);
  const float minLineWidth    = 0.002;
  const float maxLineWidth    = 0.045;
  const float lineSpeed       = 1.0  * overallSpeed;
  const float lineAmplitude   = 1.0;
  const float lineFrequency   = 0.2;
  const float warpSpeed       = 0.2  * overallSpeed;
  const float warpFrequency   = 0.5;
  const float warpAmplitude   = 1.0;
  const float offsetFrequency = 0.5;
  const float offsetSpeed     = 1.33 * overallSpeed;
  const float minOffsetSpread = 0.6;
  const float maxOffsetSpread = 2.0;
  const int   linesPerGroup   = 16;

  #define drawCircle(pos,r,c)    smoothstep(r+gridSmoothWidth,r,length(c-(pos)))
  #define drawSmoothLine(p,w,t)  smoothstep(w,0.0,abs(p-(t)))
  #define drawCrispLine(p,w,t)   smoothstep(w+gridSmoothWidth,w,abs(p-(t)))

  float random(float t) {
    return (cos(t) + cos(t*1.3+1.3) + cos(t*1.4+1.4)) / 3.0;
  }
  float getPlasmaY(float x, float hFade, float offset) {
    return random(x*lineFrequency + iTime*lineSpeed) * hFade * lineAmplitude + offset;
  }

  void main() {
    vec2 uv    = gl_FragCoord.xy / iResolution.xy;
    vec2 space = (gl_FragCoord.xy - iResolution.xy*0.5) / iResolution.x * 2.0 * scale;
    float hFade = 1.0-(cos(uv.x*6.28)*0.5+0.5);
    float vFade = 1.0-(cos(uv.y*6.28)*0.5+0.5);
    space.y += random(space.x*warpFrequency + iTime*warpSpeed)       * warpAmplitude * (0.5+hFade);
    space.x += random(space.y*warpFrequency + iTime*warpSpeed + 2.0) * warpAmplitude * hFade;

    vec4 lines = vec4(0.0);
    for (int l = 0; l < linesPerGroup; l++) {
      float nli  = float(l) / float(linesPerGroup);
      float oPos = float(l) + space.x * offsetFrequency;
      float oTime= iTime * offsetSpeed;
      float rand = random(oPos + oTime) * 0.5 + 0.5;
      float hw   = mix(minLineWidth, maxLineWidth, rand*hFade) * 0.5;
      float off  = random(oPos + oTime*(1.0+nli)) * mix(minOffsetSpread, maxOffsetSpread, hFade);
      float lp   = getPlasmaY(space.x, hFade, off);
      float line = drawSmoothLine(lp, hw, space.y)*0.5 + drawCrispLine(lp, hw*0.15, space.y);
      float cx   = mod(float(l) + iTime*lineSpeed, 25.0) - 12.0;
      vec2  cp   = vec2(cx, getPlasmaY(cx, hFade, off));
      line += drawCircle(cp, 0.01, space) * 4.0;
      lines += line * lineColor * rand;
    }

    /* transparent background, only the lines contribute with alpha */
    float alpha = min(1.0, (lines.r + lines.g + lines.b) * 0.9) * vFade;
    gl_FragColor = vec4(lines.rgb / max(alpha, 0.001), alpha * 0.45);
  }
`

/* ─── WebGL helpers ───────────────────────────────────────────────────────── */
function loadShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!
  gl.shaderSource(s, src)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error('Shader error:', gl.getShaderInfoLog(s))
    gl.deleteShader(s)
    return null
  }
  return s
}

function buildProgram(gl: WebGLRenderingContext, fs: string) {
  const vs = loadShader(gl, gl.VERTEX_SHADER, vsSource)
  const frag = loadShader(gl, gl.FRAGMENT_SHADER, fs)
  if (!vs || !frag) return null
  const p = gl.createProgram()!
  gl.attachShader(p, vs)
  gl.attachShader(p, frag)
  gl.linkProgram(p)
  return gl.getProgramParameter(p, gl.LINK_STATUS) ? p : null
}

/* ─── Component ──────────────────────────────────────────────────────────── */
interface ShaderBackgroundProps {
  /** "lines" = transparent background, only purple lines visible (for light sections) */
  variant?: 'full' | 'lines'
  className?: string
}

export function ShaderBackground({ variant = 'full', className = '' }: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const linesOnly = variant === 'lines'
    const gl = canvas.getContext('webgl', { alpha: linesOnly, premultipliedAlpha: false })
    if (!gl) return

    if (linesOnly) {
      gl.enable(gl.BLEND)
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
    }

    const program = buildProgram(gl, linesOnly ? fsLines : fsFull)
    if (!program) return

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)

    const aPos  = gl.getAttribLocation(program, 'aVertexPosition')
    const uRes  = gl.getUniformLocation(program, 'iResolution')
    const uTime = gl.getUniformLocation(program, 'iTime')

    const resize = () => {
      const parent = canvas.parentElement
      const w = parent ? parent.offsetWidth  : window.innerWidth
      const h = parent ? parent.offsetHeight : window.innerHeight
      if (w === 0 || h === 0) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width  = w * dpr
      canvas.height = h * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement ?? canvas)
    resize()

    let raf: number
    const t0 = Date.now()

    const render = () => {
      const t = (Date.now() - t0) / 1000
      gl.clearColor(0, 0, 0, linesOnly ? 0 : 1)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(program)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, t)
      gl.bindBuffer(gl.ARRAY_BUFFER, buf)
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)
      gl.enableVertexAttribArray(aPos)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}
