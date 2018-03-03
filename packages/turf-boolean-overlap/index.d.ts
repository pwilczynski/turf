import { Feature, Geometry} from '@turf/helpers';

/**
 * http://turfjs.org/docs/#booleanOverlap
 */

export function booleanOverlap(
    feature1: Feature<any> | Geometry,
    feature2: Feature<any> | Geometry) :boolean;
