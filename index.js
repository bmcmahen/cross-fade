/**
 * Expose CrossFade
 */

module.exports = CrossFade;

/**
 * CrossFade
 * 
 * @param {Canvas} canvas 
 * @param {Image} image  
 * @param {Image} image2 
 */

function CrossFade(canvas, image, image2){
  if (!(this instanceof CrossFade)) return new CrossFade(canvas, image, image2);
  this.ctx = canvas.getContext('2d');
  this.w = this.ctx.canvas.width;
  this.h = this.ctx.canvas.height;
  this.opacity = 0;
  this.image = image;
  this.image2 = image2;
  this.draw(this.ctx, image, 0, 0, this.w, this.h);
}

/**
 * Transition from one image to the other
 * 
 * @param  {Number} deg 0-1
 * @return {CrossFade}     
 */

CrossFade.prototype.transition = function(deg){
  var ctx = this.ctx;
  var w = this.w;
  var h = this.h;
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  this.draw(ctx, this.image, 0, 0, w, h);
  ctx.globalAlpha = deg;
  this.opacity = deg;
  this.draw(ctx, this.image2, 0, 0, w, h);
  ctx.restore();
  return this;
}

/**
 * Set height of canvas
 * 
 * @param {Number} h 
 */

CrossFade.prototype.setHeight = function(h){
  this.ctx.canvas.height = this.h = h;
  this.transition(this.opacity);
  return this;
};

/**
 * Set width of canvas
 * 
 * @param {Number} w 
 */

CrossFade.prototype.setWidth = function(w){
  this.ctx.canvas.width = this.w = w;
  this.transition(this.opacity);
  return this;
};

/**
 * Draw fn
 * 
 * @param  {Context} ctx 
 * @param  {Image} img 
 * @param  {Number} x   
 * @param  {Number} y   
 * @param  {Number} w   
 * @param  {Number} h   
 * @return {CrossFade}     
 */

CrossFade.prototype.draw = function(ctx, img, x, y, w, h){
  ctx.drawImage(img, x, y, w, h);
  return this;
};